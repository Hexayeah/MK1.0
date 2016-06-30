const key = 'mk-custom-v1';

// 虚拟数据
if (!localStorage.getItem(key)) {
    let now = new Date();

    let data = {
        dataid: 0
    };

    localStorage.setItem(key, JSON.stringify(data));
}

export default {
    fetch() {
            return JSON.parse(localStorage.getItem(key));
        }
        , save(store) {
            localStorage.setItem(key, JSON.stringify(store));
        }
};
