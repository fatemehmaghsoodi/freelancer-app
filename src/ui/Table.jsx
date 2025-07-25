function Table({children}){
   return (
    <div className="bg-primary-800 relative overflow-x-auto rounded-lg p-5">
        <table className="w-full text-sm text-left rtl:text-right text-base-900 ">
            {children}
        </table>
    </div>
   )}

export default Table

function TableHeader({children}){
   return <thead className="text-xs text-base-900 border-gray-700 uppercase bg-primary-900">
        <tr className="text-center">
            {children}
        </tr>
    </thead>
}

function TableBody({children}){
   return <tbody>
        {children}
    </tbody>
}

function TableRow({children}){
    return <tr className="border-gray-700 border-b bg-primary-800 text-center">
        {children}
    </tr>
}

Table.head= TableHeader;
Table.body= TableBody;
Table.row= TableRow;


