const { postDataValidator } = require("../Validation/validation")
const userDetail = require("../Models/users")

const postUserData = async (req, res) => {
    const { error } = postDataValidator(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const chooseUniqueUserName = await userDetail.findOne({ userName: req.body.userName });
    if (chooseUniqueUserName) {
        return res.send('Choose Another Unique User Name');
    }

    const data = new userDetail({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName || "",
    });

    try {
        const saveduserDetail = await data.save();
        res.send(saveduserDetail);
    } catch (err) {
        res.status(400).send(err);
    }
}

const getAllUsers = async (req, res, next) => {
    userDetail.find()
        .then((userDetail) => (userDetail))
        .then((userDetail) => res.json(userDetail))
        .catch((err) => res.status(400).json("Error: " + err));
};


const editUser = async (req, res) => {
    userDetail.findById(req.params.id)
        .then(item => {
            item.firstName = req.body.firstName
            item.lastName = req.body.lastName
            item.isActive = req.body.isActive
            item.updatedAt = new Date().toLocaleString()


            item.save()
                .then(() => res.json("userData Data updated Successfully!",))
                .catch(err => res.status(400).json(`Error : ${err}`))
        })
        .catch(err => res.status(400).json(`ERROR : ${err}`))
}

const userDataId = (req, res) => {
    console.log(req.query.id);
    userDetail.findById(req.query.id)
        .then((userDetail) => res.json(userDetail))
        .catch((err) => res.status(400).json('Error' + err));
};

const deleteUser = async (req, res) => {
    userDetail.findById(req.params.id)
        .then(item => {
            item.isActive = false
            item.save()
                .then(() => res.json("userData deleted Successfully!"))
                .catch(err => res.status(400).json(`Error : ${err}`))
        })
        .catch(err => res.status(400).json(`ERROR : ${err}`))
}

module.exports = { postUserData, getAllUsers, deleteUser, editUser, userDataId }