(function(m, doc) {
    'use strict';
    var result = m.prop([]);
    var search = function(e) {
        result = m.request({
            method: 'GET',
            url: '/search/',
            data: {
                q: e.target.value
            }
        });
    };
    var searchModule = {
        controller: function() {},
        view: function() {
            return m('div', [
                m('div', [
                    m('label', 'Leit:'),
                    m('input', {
                        oninput: search
                    })
                ]),
                m('ul', result().map(function(p) {
                    return m('li', p.nafn);
                }))
            ]);
        }
    };
    m.module(doc.getElementById('head'), searchModule);
}(Mithril, document));
