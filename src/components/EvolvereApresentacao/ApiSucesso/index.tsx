export default function ApiSucesso({ message }: { message: string }) {
    return (
        <div className="fixed top-7 right-3 p-3 rounded-lg bg-green-100 border border-green-500 text-green-700">
            {message}
        </div>
    );
}
