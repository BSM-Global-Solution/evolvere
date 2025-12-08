export default function ApiErro({ message }: { message: string }) {
    return (
        <div className="fixed top-7 right-3 p-3 rounded-lg bg-red-100 border border-red-500 text-white">
            {message}
        </div>
    );
}
