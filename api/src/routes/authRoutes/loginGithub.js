const { Router } = require("express");
const passport = require("passport");
const router = Router();

router.get("/github", passport.authenticate("auth-github",{
    scope: ["user:email"],
    session:false,
    })
);

router.get(
    "/github/callback",
    passport.authenticate("auth-github", {
        scope: ["user:email"],
        session: false,
    }),
    (req, res) => {
        const user = JSON.stringify(req.user)
        res.status(200).send(user);
    }
);




module.exports = router;
