'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const FormSchema = z.object({
    id: z.string(),
    movieId: z.coerce.number(),
    title: z.string(),
    rating: z.coerce.number()
        .lt(11, { message: 'please enter a number in the range 0-10.' }).gt(0, { message: 'please enter a number in the range 0-10.' })
    ,
    genres: z.string(),
    userId: z.coerce.number(),
    timestamp: z.string(),
});

export type State = {
    errors?: {
        // id?: string[];
        movieId?: string[];
        title?: string[];
        rating?: string[];
        genres?: string[];
        userId?: string[];
        // timestamp?: string[];
    };
    message?: string | null;
};

const CreateMovie = FormSchema.omit({ id: true, timestamp: true });

export async function AddMovie_2(prevState: State | undefined, formData: FormData) {
    const validatedFields = CreateMovie.safeParse({
        movieId: formData.get("movieId"),
        title: formData.get("title"),
        genres: formData.get("genres"),
        userId: formData.get("userId"),
        rating: formData.get("rating"),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    const { movieId, title, genres, userId, rating } = validatedFields.data;
    const time = new Date().toDateString() + " " + new Date().toLocaleTimeString('en-US');
    // console.log("RawData: ");
    // const post = { movieId: movieId, title: title, genres: genres, rating: rating, userId: userId, timestamp: time };
    try {

        // const data = await... //accepting result from fetch causes errors "unexpected end of json input"
        await fetch('http://localhost:8081/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ movieId: movieId, title: title, genres: genres, rating: rating, userId: userId, timestamp: time })
        });


    } catch (error) {
        return {
            errors: undefined,
            message: 'Database Error: Failed to Create Invoice.'
        };
    }

    revalidatePath('/movies');
    // redirect('/fetch'); // cannot redirect to the active path URL
}


export type PatchState = {
    errors?: {
        // id?: string[];
        movieId?: string[];
        title?: string[];
        rating?: string[];
        genres?: string[];
        userId?: string[];
        timestamp?: string[];
    };
    message?: string | null;
};
const PatchMovie = FormSchema.omit({ id: true });
export async function UpdateMovie_2(id: string, prevState: PatchState | undefined, formData: FormData) {
    // const time = new Date().toDateString();
    const validatedFields = PatchMovie.safeParse({
        movieId: formData.get("movieId"),
        title: formData.get("title"),
        genres: formData.get("genres"),
        userId: formData.get("userId"),
        rating: formData.get("rating"),
        timestamp: formData.get("timestamp"),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    const { movieId, title, genres, userId, rating, timestamp } = validatedFields.data;
    try {               //thinking of searching for movie with userId .../search/findByTitle...userId=
        await fetch(`http://localhost:8081/movie/${id}`, {   //or pass the id using a hidden input field or something
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ movieId: movieId, title: title, genres: genres, rating: rating, userId: userId, timestamp: timestamp })
        });

    } catch (error) {
        return {
            errors: undefined,
            message: 'Database Error: Failed to Create Invoice.'
        };
    }

    revalidatePath(`/movies/${userId}`);
    revalidatePath('/movies');
    redirect('/movies');
}

export async function DeleteMovie_2(id: string) {
    // console.log("id: " + id);
    try {
        await fetch(`http://localhost:8081/movie/${id}`,
            { method: 'DELETE', }
        );
        // console.log(data);
    } catch (error) {
        throw new Error("Failed to Delete Movie from Database: " + error);
    }
    // return { message: "Invoice Deleted.", };
    revalidatePath("/movies");
}
