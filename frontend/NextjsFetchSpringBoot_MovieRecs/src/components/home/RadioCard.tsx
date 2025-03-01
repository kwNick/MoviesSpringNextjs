'use client';
import { useRef } from "react";

const RadioCard = ({ idx, title, description }: { idx: number, title: string, description: string }) => {
    const card = useRef<HTMLInputElement>(null);
    console.log(card?.current?.checked);
    const radioChecked = () => {
        if (card.current) {
            card.current.checked = !card.current.checked;
        }
    };

    return (
        <div className="group h-full flex flex-nowrap items-center justify-center overflow-hidden">
            <input type="radio" name="card" id="c0" ref={card} className="hidden peer" />
            <label htmlFor="c0" className="mx-[10px] w-[100px] h-4/5 overflow-hidden flex items-end border rounded-3xl peer-checked:w-[600px] duration-500 [background-image:_url('/pictures/moviePic.jpg')] bg-cover" onClick={() => radioChecked} >
                <div className="flex flex-nowrap">
                    <div className="[margin:_15px] w-[50px] bg-snow rounded-full flex items-center justify-center">
                        {idx}
                    </div>
                    <div className="h-[80px] w-[520px] flex flex-col justify-center overflow-hidden opacity-0 group-has-[.peer:checked]:opacity-100 transition-opacity duration-300">
                        <h4>
                            {title}
                        </h4>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </label>
        </div>
    )
}
export default RadioCard