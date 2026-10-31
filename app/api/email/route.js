export async function POST(request){
    const formData  = await request.formData();

    const emailData = {
        email:`${formData.get('email')}`,
    }
}