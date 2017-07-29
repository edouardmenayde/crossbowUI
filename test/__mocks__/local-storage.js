class LocalStorageMock {
    store = new Map();

    getItem(key) {
        return this.store.get(key) || null;
    }

    setItem(key, value) {
        this.store.set(key, value);
    }
}

export default new LocalStorageMock();
