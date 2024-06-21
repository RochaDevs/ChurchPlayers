import { CardQuizzes } from "@/components/CentralJogos/CardQuizzes";

export default function CentralJogos() {

    const quizzesData = [
        {
            title: "Science Quiz",
            altImage: "Science related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on various science topics.",
            srcLink: "/dashboard/centraljogos/science"
        },
        {
            title: "History Quiz",
            altImage: "History related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know world history? Take this quiz to find out.",
            srcLink: "/dashboard/centraljogos/history"
        },
        {
            title: "Geography Quiz",
            altImage: "Geography related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Challenge yourself with questions about different places around the world.",
            srcLink: "/dashboard/centraljogos/geography"
        },
        {
            title: "Math Quiz",
            altImage: "Math related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Solve these math problems to see how good you are at mathematics.",
            srcLink: "/dashboard/centraljogos/math"
        },
        {
            title: "Literature Quiz",
            altImage: "Literature related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Answer questions about famous books and authors.",
            srcLink: "/dashboard/centraljogos/literature"
        },
        {
            title: "Music Quiz",
            altImage: "Music related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on various music genres and artists.",
            srcLink: "/dashboard/centraljogos/music"
        },
        {
            title: "Art Quiz",
            altImage: "Art related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know famous artworks and artists?",
            srcLink: "/dashboard/centraljogos/art"
        },
        {
            title: "Sports Quiz",
            altImage: "Sports related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on various sports and athletes.",
            srcLink: "/dashboard/centraljogos/sports"
        },
        {
            title: "Technology Quiz",
            altImage: "Technology related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know recent technological advancements?",
            srcLink: "/dashboard/centraljogos/technology"
        },
        {
            title: "Movies Quiz",
            altImage: "Movies related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Answer questions about popular movies and actors.",
            srcLink: "/dashboard/centraljogos/movies"
        },
        {
            title: "TV Shows Quiz",
            altImage: "TV Shows related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on various TV shows and series.",
            srcLink: "/dashboard/centraljogos/tvshows"
        },
        {
            title: "General Knowledge Quiz",
            altImage: "General knowledge related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Challenge yourself with general knowledge questions.",
            srcLink: "/dashboard/centraljogos/general"
        },
        {
            title: "Math Quiz 2",
            altImage: "Math related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Solve more math problems to test your skills.",
            srcLink: "/dashboard/centraljogos/math2"
        },
        {
            title: "Literature Quiz 2",
            altImage: "Literature related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Answer more questions about famous books and authors.",
            srcLink: "/dashboard/centraljogos/literature2"
        },
        {
            title: "History Quiz 2",
            altImage: "History related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on more historical events.",
            srcLink: "/dashboard/centraljogos/history2"
        },
        {
            title: "Science Quiz 2",
            altImage: "Science related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Challenge yourself with more science topics.",
            srcLink: "/dashboard/centraljogos/science2"
        },
        {
            title: "Geography Quiz 2",
            altImage: "Geography related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "More questions about different places around the world.",
            srcLink: "/dashboard/centraljogos/geography2"
        },
        {
            title: "Movies Quiz 2",
            altImage: "Movies related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Answer more questions about popular movies and actors.",
            srcLink: "/dashboard/centraljogos/movies2"
        },
        {
            title: "Music Quiz 2",
            altImage: "Music related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on more music genres and artists.",
            srcLink: "/dashboard/centraljogos/music2"
        },
        {
            title: "Art Quiz 2",
            altImage: "Art related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know more famous artworks and artists?",
            srcLink: "/dashboard/centraljogos/art2"
        },
        {
            title: "Sports Quiz 2",
            altImage: "Sports related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on more sports and athletes.",
            srcLink: "/dashboard/centraljogos/sports2"
        },
        {
            title: "Technology Quiz 2",
            altImage: "Technology related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know recent technological advancements?",
            srcLink: "/dashboard/centraljogos/technology2"
        },
        {
            title: "TV Shows Quiz 2",
            altImage: "TV Shows related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on various TV shows and series.",
            srcLink: "/dashboard/centraljogos/tvshows2"
        },
        {
            title: "General Knowledge Quiz 2",
            altImage: "General knowledge related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Challenge yourself with general knowledge questions.",
            srcLink: "/dashboard/centraljogos/general2"
        },
        {
            title: "Nature Quiz",
            altImage: "Nature related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge about nature and wildlife.",
            srcLink: "/dashboard/centraljogos/nature"
        },
        {
            title: "Travel Quiz",
            altImage: "Travel related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know famous travel destinations?",
            srcLink: "/dashboard/centraljogos/travel"
        },
        {
            title: "Food Quiz",
            altImage: "Food related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on various cuisines and dishes.",
            srcLink: "/dashboard/centraljogos/food"
        },
        {
            title: "Celebrity Quiz",
            altImage: "Celebrity related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know famous celebrities?",
            srcLink: "/dashboard/centraljogos/celebrity"
        },
        {
            title: "Mythology Quiz",
            altImage: "Mythology related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on various mythologies.",
            srcLink: "/dashboard/centraljogos/mythology"
        },
        {
            title: "Languages Quiz",
            altImage: "Languages related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know different languages?",
            srcLink: "/dashboard/centraljogos/languages"
        },
        {
            title: "Space Quiz",
            altImage: "Space related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge about space and astronomy.",
            srcLink: "/dashboard/centraljogos/space"
        },
        {
            title: "History Quiz 3",
            altImage: "History related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know more historical events?",
            srcLink: "/dashboard/centraljogos/history3"
        },
        {
            title: "Science Quiz 3",
            altImage: "Science related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Challenge yourself with even more science topics.",
            srcLink: "/dashboard/centraljogos/science3"
        },
        {
            title: "Geography Quiz 3",
            altImage: "Geography related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "More questions about different places around the world.",
            srcLink: "/dashboard/centraljogos/geography3"
        },
        {
            title: "Math Quiz 3",
            altImage: "Math related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Solve more math problems to test your skills.",
            srcLink: "/dashboard/centraljogos/math3"
        },
        {
            title: "Literature Quiz 3",
            altImage: "Literature related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Answer more questions about famous books and authors.",
            srcLink: "/dashboard/centraljogos/literature3"
        },
        {
            title: "Movies Quiz 3",
            altImage: "Movies related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Answer more questions about popular movies and actors.",
            srcLink: "/dashboard/centraljogos/movies3"
        },
        {
            title: "Music Quiz 3",
            altImage: "Music related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on more music genres and artists.",
            srcLink: "/dashboard/centraljogos/music3"
        },
        {
            title: "Art Quiz 3",
            altImage: "Art related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know more famous artworks and artists?",
            srcLink: "/dashboard/centraljogos/art3"
        },
        {
            title: "Sports Quiz 3",
            altImage: "Sports related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on more sports and athletes.",
            srcLink: "/dashboard/centraljogos/sports3"
        },
        {
            title: "Technology Quiz 3",
            altImage: "Technology related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know recent technological advancements?",
            srcLink: "/dashboard/centraljogos/technology3"
        },
        {
            title: "TV Shows Quiz 3",
            altImage: "TV Shows related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on various TV shows and series.",
            srcLink: "/dashboard/centraljogos/tvshows3"
        },
        {
            title: "General Knowledge Quiz 3",
            altImage: "General knowledge related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Challenge yourself with general knowledge questions.",
            srcLink: "/dashboard/centraljogos/general3"
        },
        {
            title: "Science Quiz 4",
            altImage: "Science related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Test your knowledge on various science topics.",
            srcLink: "/dashboard/centraljogos/science4"
        },
        {
            title: "History Quiz 4",
            altImage: "History related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "How well do you know world history? Take this quiz to find out.",
            srcLink: "/dashboard/centraljogos/history4"
        },
        {
            title: "Geography Quiz 4",
            altImage: "Geography related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Challenge yourself with questions about different places around the world.",
            srcLink: "/dashboard/centraljogos/geography4"
        },
        {
            title: "Math Quiz 4",
            altImage: "Math related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Solve these math problems to see how good you are at mathematics.",
            srcLink: "/dashboard/centraljogos/math4"
        },
        {
            title: "Literature Quiz 4",
            altImage: "Literature related quiz",
            srcImage: "https://via.placeholder.com/150",
            description: "Answer questions about famous books and authors.",
            srcLink: "/dashboard/centraljogos/literature4"
        },
    ];
    

    return (
        <section className="flex flex-col w-full h-full justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto h-full w-3/4 max-h-[80vh] p-4">
                {quizzesData.map((quiz, index) => (
                    <CardQuizzes 
                        key={index}
                        title={quiz.title}
                        altImage={quiz.altImage}
                        srcImage={quiz.srcImage}
                        description={quiz.description}
                        srcLink={quiz.srcLink}
                    />
                ))}
            </div>
        </section>
    );
}
