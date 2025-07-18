import { stringify } from "querystring";
const comments = [
    {
        id:1,
        text: "This is the First Comment",
    },{
        id:1,
        text: "This is the Second Comment",
    },{
        id:1,
        text: "This is the Third Comment",
    },
];
export async function GET(){
    return Response.json(comments);
}

export async function POST(request: Request){
    const comment = await request.json();
    const newComment = {
        id: comments.length +1,
        text: comment.text,
    };
    comments.push(newComment);
    return new Response (JSON.stringify(newComment),{
        headers: {"Content-type":"application/json"},
        status: 201, 
    });

}