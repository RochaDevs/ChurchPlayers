
export default function SelectedQuiz({ params }: { params: { slug: string } }) {
    return (
        <div>My Post: {params.slug}</div>
    )
}