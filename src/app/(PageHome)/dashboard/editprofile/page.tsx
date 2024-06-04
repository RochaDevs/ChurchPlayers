import { EditProfileForm } from "@/components/EditProfileForm";


export default function Settings() {
    return (
        <section className={`w-full h-full flex items-center justify-center relative`}>
            <div className={`w-3/5 h-4/5 rounded-lg bg-slate-300 p-4`}>
                <EditProfileForm />
            </div>
        </section>
    )
}