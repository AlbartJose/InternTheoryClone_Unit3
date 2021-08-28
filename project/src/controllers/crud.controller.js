const post = (model) => async function (req, res) {
    try {
        const item = await model.create(req.body);
        return res.status(201).send(item);
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const get = (model) => async function (req, res) {
    const items = await model.find({}).lean().exec()
    return res.status(200).send(items);
};

const getOne = (model) => async function (req, res) {
    try {
        var id = req.params.id;
        const item = await model.findById(id).lean().exec();
        return res.status(200).send(item);
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const patch = (model) => async function (req, res) {
    try {
        var id = req.params.id;
        const item = await model.findByIdAndUpdate(id, req.body, { new: true }).lean().exec();
        return res.status(203).send(item);
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const deleteOne = (model, itemName) => async function (req, res) {
    try {
        var id = req.params.id;
        const item = await model.findByIdAndDelete(id).lean().exec();
        return res.status(200).json({ [itemName]: item });
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

module.exports = (model, itemName) => ({
    post: post(model),
    get: get(model),
    getOne: getOne(model),
    patch: patch(model),
    deleteOne: deleteOne(model, itemName),
})