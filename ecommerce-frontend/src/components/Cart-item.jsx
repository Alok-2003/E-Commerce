type CartItemProps = {
    cartItem: CartItem;
    incrementHandler: (cartItem: CartItem) => void;
    decrementHandler: (cartItem: CartItem) => void;
    removeHandler: (id: string) => void;
};

const CartItem = ({
    cartItem,
    incrementHandler,
    decrementHandler,
    removeHandler,
}: CartItemProps) => {

export default CartItem;