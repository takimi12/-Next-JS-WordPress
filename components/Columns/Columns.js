export const Columns = ({isStackedOnMobile, children}) => {
return (
    <di className="my-10">
        <div className={`max-w-5xl mx-auto ${
            isStackedOnMobile ? "block md:flex" : "flex" 
            }`}>
            {children}
        </div>
    </di>
)

}