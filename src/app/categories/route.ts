export async function GET(){
    const categories = [
        {id:1,name:"Electronics"},
        {id:2,name:"Clocks"},
        {id:3,name:"Mobiles"},
        {id:4,name:"Food"},
    ];
    return Response.json(categories);
}