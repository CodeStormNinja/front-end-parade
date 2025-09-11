export function Card(){
    return(
        <section className="*:box-border w-[300px] h-[400px] flex flex-col items-center justify-center text-center mt-6 p-4 ">
            <picture className="w-full h-[42.36%] flex flex-col items-center gap-2 p-2 rounded-t-md bg-amber-300">
                <img src="src\assets\sunny.svg" alt=""/>
                <p className="text-2xl font-bold text-sky-950">Sunny</p>
            </picture>
            <article className="w-full h-[57.64%] flex flex-col gap-3 rounded-b-md   font-bold pt-3 text-sky-950 bg-white">
                <h3 className="text-5xl">27°C</h3>
                <div>
                    <p className="text-base">9:00 a.m.</p>
                    <p className="text-base">Fortaleza</p>
                </div>
               <div>
                    <hr className="mb-4 text-gray-200" />
                    <p className="text-sm">20% chance not to occur</p>
               </div>
            </article>
        </section>
    )
}