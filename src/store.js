export const convertion = {
    get data () {
        return this._data;
    },
    set data (data) {
        this._data = data;
        Object.keys(this.watchers).forEach(key => this.watchers[key](data));
    }
};

convertion._data = [];
convertion.watchers = {};

export const rates = {
    get response () {
        return this._response;
    },
    set response (response) {
        this._response = response;
        Object.keys(this.watchers).forEach(key => this.watchers[key](response));
    }
};

rates._response = {};
rates.watchers = {};

export const state = {
    selected: null,
    value: null,
    get result () {
        return this._result;
    },
    set result (result) {
        this._result = result;
        Object.keys(this.watchers).forEach(key => this.watchers[key](response));
    }
};

state._result = '';
state.watchers = {};
