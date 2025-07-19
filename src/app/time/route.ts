export async function Time(){
    return Response.json({time: new Date().toLocaleDateString()});
}