import { Configuration, OpenAIApi } from "openai";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    let prompt = `Write a motivation letter to apply for ${body.form.organization}. Currently I am ${body.form.currentPosition} List of my personality traits: ${body.form.personalityTraits.toString()}`

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 1,
        max_tokens: 500
    });

    //console.log(completion.data)

    return {
        letter: completion.data.choices[0].text.replace(/\n/g, "<br>"),
    }
});