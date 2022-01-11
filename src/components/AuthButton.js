export default function AuthButton({title, handleAction}) {
    return (
        <button onClick={handleAction}>{title}</button>
    );
}