import { Input } from "components/Input";

 export const Filters = () => {
    return ( 
        <div className="max-w-5xl mx-auto my-5  flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
            <div className="flex-1">
                <div>
                <label className="cursor-pointer">
                    <input type="checkbox" />
                    <span className="pt-2">Has parking</span>
                </label>
                </div>
                <div>
                    <label className="cursor-pointer">
                        <input type="checkbox" />
                        <span className="pt-2">pet friendly</span>
                    </label>

                </div>
            </div>
            <div className="flex-1">
                <span>Min Price </span>
                <Input type="number" />
            </div>
            <div className="flex-1">
                <span>Max Price </span>
                <Input type="number" />
                </div>
            <div className="btn">Search</div>
        </div>
     );
}
 
