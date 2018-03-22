
const Node = (data) => {
    return {
        data: data,
        next: null
    };
};

const add = (state) => ({

    add: (node) => {

        if (state.length === 0) {
            state.head = node;
            state.tail = node;

        } else {
            // let tail = state.tail; (tail = node)  !=== (state.tail = node)
            state.tail.next = node;
            state.tail = node;
        }
        state.length++;
    }

});

const List = () => {
    const list = {
        length: 0,
        head: null,
        tail: null
    };
    return Object.assign(list, add(list));
};

module.exports = {
    Node,
    List
};
