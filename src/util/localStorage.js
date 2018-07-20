const getItem = (key) => {
    let value;
    try {
        value = localStorage.getItem(key);
    } catch (ex) {
        console.error('localStorage.getItem Fail', ex.message)
    } finally {
        return value;
    }
};
const setItem = (key, value) => {
    try {
        localStorage.setItem(key, value)
    } catch (ex) {
        console.error('localStorage.setItem Fail, ', ex.message)
    }
};

export {getItem, setItem};