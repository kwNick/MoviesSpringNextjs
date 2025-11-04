import CreateForm from "@/components/movies/create/CreateForm"
// import {Activity } from 'react';

const page = () => {
    return (
        <div className="w-full min-h-screen flex  justify-center pt-14 ">
            {/* Maybe wrap in Activity component to save form data on page navigation  --> Tried and i dont think its for this. On page reload the content is gone, only for hiding and unhiding components i guess */}
            {/* <Activity> */}
                <CreateForm />
            {/* </Activity> */}
        </div>
    )
}
export default page