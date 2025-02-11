// 'use server';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { z } from 'zod';

// const FormSchema = z.object({
//     id: z.string(),
//     movieId: z.coerce.number(),
//     title: z.string(),
//     rating: z.coerce.number()
//     // .lt(11, { message: 'please enter a number in the range 0-10.' }).gt(0, { message: 'please enter a number in the range 0-10.' })
//     ,
//     genres: z.string(),
//     userId: z.coerce.number(),
//     timestamp: z.string(),
// });
// const CreateMovie = FormSchema.omit({ id: true, timestamp: true });

// export async function AddMovie(formData: FormData) {
//     const { movieId, title, genres, userId, rating } = CreateMovie.parse({
//         movieId: formData.get("movieId"),
//         title: formData.get("title"),
//         genres: formData.get("genres"),
//         userId: formData.get("userId"),
//         rating: formData.get("rating"),
//     });

//     // console.log("RawData: ");
//     const time = new Date().toDateString() + " " + new Date().toLocaleTimeString('en-US');
//     // const post = { movieId: movieId, title: title, genres: genres, rating: rating, userId: userId, timestamp: time };
//     try {

//         // const data = await... //accepting result from fetch causes errors "unexpected end of json input"
//         await fetch('http://localhost:8080/api/movie', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ movieId: movieId, title: title, genres: genres, rating: rating, userId: userId, timestamp: time })
//         });


//     } catch (error) {
//         throw new Error("Failed To Add Movie Data to Database: " + error);
//     }

//     revalidatePath('/movies');
//     // redirect('/fetch'); // cannot redirect to the active path URL
// }

// const PatchMovie = FormSchema.omit({ id: true });
// export async function UpdateMovie(formData: FormData) {
//     // const time = new Date().toDateString();
//     const { movieId, title, genres, userId, rating, timestamp } = PatchMovie.parse({
//         movieId: formData.get("movieId"),
//         title: formData.get("title"),
//         genres: formData.get("genres"),
//         userId: formData.get("userId"),
//         rating: formData.get("rating"),
//         timestamp: formData.get("timestamp"),
//     });

//     try {
//         await fetch('http://localhost:8080/api/movie', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ movieId: movieId, title: title, genres: genres, rating: rating, userId: userId, timestamp: timestamp })
//         });

//     } catch (error) {
//         throw new Error("Failed To Updated Movie Data to Database: " + error);
//     }

//     revalidatePath(`/movies/${userId}`);
//     revalidatePath('/movies');
//     redirect('/movies');
// }

// export async function DeleteMovie(userId: number) {
//     // console.log("userId: " + userId);
//     try {
//         await fetch(`http://localhost:8080/api/movie/${userId}`,
//             { method: 'DELETE', }
//         );
//         revalidatePath("/movies");
//     } catch (error) {
//         throw new Error("Failed to Delete Movie from Database: " + error);
//     }
//     // return { message: "Invoice Deleted.", };
// }