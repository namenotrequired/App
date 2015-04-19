exports.definition = {
    config: {
        columns: {
            "first_name": "",
            "last_name": "",
            "phone": "",
            "email": ""
        },
        defaults: {
            "first_name": "",
            "last_name": "",
            "phone": "",
            "email": ""
        },
        adapter: {
            type: "properties",
            collection_name: "user"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
        });

        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here
        });

        return Collection;
    }
};
