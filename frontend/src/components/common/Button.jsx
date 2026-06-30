function Button({ children, type = "button"}) {
    return (
        <button type = {type}>
            {children}
        </button>
    );
}

export default Button;



// function Button({ children, type = "button" }) {

// Yahan hum props receive kar rahe hain.

// children ka matlab button ke andar ka text.

// Example:
 
// <Button>Login</Button>

// Yahan Login children hai.