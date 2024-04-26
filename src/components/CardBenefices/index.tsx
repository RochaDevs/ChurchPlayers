
interface IBeneficesCard {
    icone: React.ReactNode,
    titulo: string,
    beneficio: string
}

export const BeneficesCard = ({ icone, titulo, beneficio }: IBeneficesCard) => {
    return (
        <>
            <div className={`flex items-center text-sm`}>
                {icone}
                <div className={`flex flex-col`}>
                    <h3 className={`font-bold`}>
                        {titulo}
                    </h3>
                    <p>
                        {beneficio}
                    </p>
                </div>
            </div>
        </>
    )
};