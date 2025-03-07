'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

//Mutating Data w/ React Server Actions

const FormSchema = z.object({
    id: z.string(),
    movieId: z.coerce.number(),
    title: z.string(),
    averageRating: z.coerce.number()
        .lt(11, { message: 'please enter a number in the range 0-10.' }).gt(0, { message: 'please enter a number in the range 0-10.' }),
    genres: z.string(),
    totalRatings: z.coerce.number(),
    releaseYear: z.coerce.number(),
});

export type State = {
    errors?: {
        // id?: string[];
        movieId?: string[];
        title?: string[];
        averageRating?: string[];
        genres?: string[];
        totalRatings?: string[];
        releaseYear?: string[];
    } | undefined;
    message?: string | null;
};

const CreateMovie = FormSchema.omit({ id: true });

export async function AddMovie_2(prevState: State | undefined, formData: FormData) {
    const validatedFields = CreateMovie.safeParse({
        movieId: formData.get("movieId"),
        title: formData.get("title"),
        genres: formData.get("genres"),
        averageRating: formData.get("averageRating"),
        totalRatings: formData.get("totalRatings"),
        releaseYear: formData.get("releaseYear"),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Add Movie.',
        };
    }

    const { movieId, title, genres, averageRating, totalRatings, releaseYear } = validatedFields.data;
    try {

        await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/movie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ movieId: movieId, title: title, genres: genres, averageRating: averageRating, totalRatings: totalRatings, releaseYear: releaseYear })
        });


    } catch (error) {
        return {
            errors: undefined,
            message: 'Database Error: Failed to Add Movie.' + error
        };
    }

    revalidatePath('/movies');
    redirect("/movies");
}


export type PatchState = {
    errors?: {
        // id?: string[];
        movieId?: string[];
        title?: string[];
        averageRating?: string[];
        genres?: string[];
        totalRatings?: string[];
        releaseYear?: string[];
    };
    message?: string | null;
};
const PatchMovie = FormSchema.omit({ id: true });
export async function UpdateMovie_2(id: string, prevState: PatchState | undefined, formData: FormData) {
    const validatedFields = PatchMovie.safeParse({
        movieId: formData.get("movieId"),
        title: formData.get("title"),
        genres: formData.get("genres"),
        averageRating: formData.get("averageRating"),
        totalRatings: formData.get("totalRatings"),
        releaseYear: formData.get("releaseYear"),
    });

    // If form validation fails, return errors early. else, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Movie.',
        };
    }
    const { movieId, title, genres, averageRating, totalRatings, releaseYear } = validatedFields.data;
    try {
        await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/movie/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ movieId: movieId, title: title, genres: genres, averageRating: averageRating, totalRatings: totalRatings, releaseYear: releaseYear })
        });

    } catch (error) {
        return {
            errors: undefined,
            message: 'Database Error: Failed to Update Movie.' + error
        };
    }

    revalidatePath(`/movies/${movieId}`);
    revalidatePath('/movies');
    redirect('/movies');
}

export async function DeleteMovie_2(id: string) {
    // console.log("id: " + id);
    try {
        await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/movie/${id}`,
            { method: 'DELETE', }
        );
        // console.log(data);
    } catch (error) {
        throw new Error("Failed to Delete Movie from Database: " + error);
    }
    // return { message: "Invoice Deleted.", };
    revalidatePath("/movies");
}
