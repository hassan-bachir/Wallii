function Input({ label, type, inputRef, placeholder }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="name" className="mb-2">
                {label}
            </label>
            <input
                type={type}
                ref={inputRef}
                placeholder={placeholder}
                className="border-2 border-primary-blue rounded-xl px-5 py-3 text-lg focus:border-2 focus:border-secondary-blue focus:outline-none"
            />
        </div>
    );
}

Input.defaultProps = {
    type: "text",
};

export default Input;
