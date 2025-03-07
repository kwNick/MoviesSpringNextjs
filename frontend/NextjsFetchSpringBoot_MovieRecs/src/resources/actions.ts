'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

//Mutating Data w/ React Server Actions
//NewMovie Schema

const FormSchema = z.object({
    id: z.string(),
    title: z.string(),
    year: z.string(),
    rated: z.string(),
    // released: z.string(),
    // runtime: z.string(),
    genre: z.string(),
    // director: z.string(),
    // writer: z.string(),
    // actors: z.string(),
    plot: z.string(),
    // language: z.string(),
    // country: z.string(),
    // awards: z.string(),
    poster: z.string(),
    // metascore: z.string(),
    // imdbrating: z.string(),
    // imdbvotes: z.string(),
    // type: z.string(),
    // boxoffice: z.string(),

});

export type State = {
    errors?: {
        title?: string[];
        year?: string[];
        rated?: string[];
        // released?: string[];
        // runtime?: string[];
        genre?: string[];
        // director?: string[];
        // writer?: string[];
        // actors?: string[];
        plot?: string[];
        // language?: string[];
        // country?: string[];
        // awards?: string[];
        poster?: string[];
        // metascore?: string[];
        // imdbrating?: string[];
        // imdbvotes?: string[];
        // type?: string[];
        // boxoffice?: string[];
    } | undefined;
    message?: string | null;
}

const CreateMovie = FormSchema.omit({ id: true });
export async function AddMovie(prevState: State | undefined, formData: FormData) {
    const validatedFields = CreateMovie.safeParse({
        year: formData.get("year"),
        title: formData.get("title"),
        genre: formData.get("genre"),
        rated: formData.get("rated"),
        plot: formData.get("plot"),
        poster: formData.get("poster"),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Add New Movie.',
        };
    }

    const { year, title, genre, rated, plot, poster } = validatedFields.data;
    try {
        await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/newmovie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ year: year, title: title, genre: genre, rated: rated, plot: plot, poster: poster })
        });


    } catch (error) {
        return {
            errors: undefined,
            message: 'Database Error: Failed to Add New Movie.' + error
        };
    }

    revalidatePath('/movies');
    redirect('/movies'); // cannot redirect to the active path URL
}

export type PatchState = {
    errors?: {
        title?: string[];
        year?: string[];
        rated?: string[];
        // released?: string[];
        // runtime?: string[];
        genre?: string[];
        // director?: string[];
        // writer?: string[];
        // actors?: string[];
        plot?: string[];
        // language?: string[];
        // country?: string[];
        // awards?: string[];
        poster?: string[];
        // metascore?: string[];
        // imdbrating?: string[];
        // imdbvotes?: string[];
        // type?: string[];
        // boxoffice?: string[];
    } | undefined;
    message?: string | null;
};
const PatchMovie = FormSchema.omit({ id: true });
export async function UpdateMovie(id: string, prevState: PatchState | undefined, formData: FormData) {
    const validatedFields = PatchMovie.safeParse({
        year: formData.get("year"),
        title: formData.get("title"),
        genre: formData.get("genre"),
        plot: formData.get("plot"),
        rated: formData.get("rated"),
        poster: formData.get("poster"),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Add New Movie.',
        };
    }

    const { year, title, genre, rated, plot, poster } = validatedFields.data;

    try {
        await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/newmovie/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ year: year, title: title, genre: genre, rated: rated, plot: plot, poster: poster })
        });

    } catch (error) {
        return {
            errors: undefined,
            message: 'Database Error: Failed to Update New Movie.' + error
        };
    }

    revalidatePath(`/movies/${id}`);
    revalidatePath('/movies');
    redirect('/movies');
}

export async function DeleteMovie(id: string) {
    // console.log("userId: " + userId);
    try {
        await fetch(`http://${process.env.LOCAL_REST_API_IP}:${process.env.REST_API_PORT}/movie/${id}`,
            { method: 'DELETE', }
        );
        //console.log(data);
    } catch (error) {
        throw new Error("Failed to Delete Movie from Database: " + error);
    }
    // return { message: "Invoice Deleted.", };
    revalidatePath("/movies");
}