import useStore from '../stores/useStore';

function TextInput() {
    const text = useStore((state) => state.text);
    const setText = useStore((state) => state.setText);

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>入力したテキスト: {text}</p>
        </div>
    );
}

export default TextInput;