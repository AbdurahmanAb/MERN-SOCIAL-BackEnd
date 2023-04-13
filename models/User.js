const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "first name is required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "last name is required"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      trim: true,
      text: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    picture: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAMFBMVEXk5ueutLfEyMrn6eqrsbSyt7rh4+S3vL+nrrHBxcjIzM7R1NbN0NLd3+HY2927wMLuh9A5AAAC30lEQVR4nO2a25arIAxA0XAVwf//2wE6p/XMWCGUoLMW+6lv3SskURIZGwwGg8FgMBgMBoPB3wYAmIzEHxcpMLduSkwBoYyV7AIRkLPQevoH11ytvQMCXr0MXiZGdvQAt/FfDsmDL93iAet0LBE9RKdwgPl9GDu07aABUr0NxHc4lg4aOYkeGpCXCIdCrAFviuNnNFZKDViKJIKGI7RwhRKhp9MFA0SpBGGGgj1tFL3OpDwUwcLQBAPW4qwgDAYiK5IFTWZ4VCiCBoUFGKSF9gQagJSYJor8dIgyfaDaSyArJCHbWxi0BEViKLQFRa3iukWyaJ+eEi0xTdstLFR7C3yJEFiUv+CQxgIvQWGBrxGC7LxHpVZ0LYJryT06+D2eZvd4sjPASpC8hd/jjQ/99juRvIPf4yaAuiAGC4IKSaBuiDPRdRkXDKpQMCjv4pTTnFtMUTATJdLBVuF0jXjyeotJY5EGvUQgdyhdJtC3mMazzGZCdVvUxC3NoQefupzG0+N4YzX33FglD7kI/YoI11rZK9aZcZNp0iZTXLbJTB7PZe41W930/9J5b7/xTu6kegiEv7fLJuLickc4mM1YH2XoHZhflOD6TaVqHlOE9IAg1IUKf3TWOR/lImZP4wHgYmlmDHZBMe1FAOz2vm0fi3C1Nm1iAKuoGCjFtXszD2ALMgx7jzafIQCzVXF4ekwN4gHu4LGF9fjwjQPY/KlDRH/00gHuo8PYUx8O5PX4FG5qJc7fL7EalR+plNw8MBo197XsJycVoEdMslle7uBYDQoJ7CW68FJcAWK2AkvL6vgPUS7RsE/8hBdvK2qWU+UahV0UNkKJoHH5eSSLsjOpWE3hNAq6Rs0eBGlRstQjdogaPp8V1KEoyQzEeLcenYuFpC2QB7nxNH1uJjJHQtyxnmQeatTN4kGmSmq+LKixOE8M3yM5c0tOWDXvwmn7BGvmLmSGs9CHU4fBYDAY/B2+AHCKJT2UsNePAAAAAElFTkSuQmCC",
      trim: true,
    },
    cover: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAMFBMVEXk5ueutLfEyMrn6eqrsbSyt7rh4+S3vL+nrrHBxcjIzM7R1NbN0NLd3+HY2927wMLuh9A5AAAC30lEQVR4nO2a25arIAxA0XAVwf//2wE6p/XMWCGUoLMW+6lv3SskURIZGwwGg8FgMBgMBoPB3wYAmIzEHxcpMLduSkwBoYyV7AIRkLPQevoH11ytvQMCXr0MXiZGdvQAt/FfDsmDL93iAet0LBE9RKdwgPl9GDu07aABUr0NxHc4lg4aOYkeGpCXCIdCrAFviuNnNFZKDViKJIKGI7RwhRKhp9MFA0SpBGGGgj1tFL3OpDwUwcLQBAPW4qwgDAYiK5IFTWZ4VCiCBoUFGKSF9gQagJSYJor8dIgyfaDaSyArJCHbWxi0BEViKLQFRa3iukWyaJ+eEi0xTdstLFR7C3yJEFiUv+CQxgIvQWGBrxGC7LxHpVZ0LYJryT06+D2eZvd4sjPASpC8hd/jjQ/99juRvIPf4yaAuiAGC4IKSaBuiDPRdRkXDKpQMCjv4pTTnFtMUTATJdLBVuF0jXjyeotJY5EGvUQgdyhdJtC3mMazzGZCdVvUxC3NoQefupzG0+N4YzX33FglD7kI/YoI11rZK9aZcZNp0iZTXLbJTB7PZe41W930/9J5b7/xTu6kegiEv7fLJuLickc4mM1YH2XoHZhflOD6TaVqHlOE9IAg1IUKf3TWOR/lImZP4wHgYmlmDHZBMe1FAOz2vm0fi3C1Nm1iAKuoGCjFtXszD2ALMgx7jzafIQCzVXF4ekwN4gHu4LGF9fjwjQPY/KlDRH/00gHuo8PYUx8O5PX4FG5qJc7fL7EalR+plNw8MBo197XsJycVoEdMslle7uBYDQoJ7CW68FJcAWK2AkvL6vgPUS7RsE/8hBdvK2qWU+UahV0UNkKJoHH5eSSLsjOpWE3hNAq6Rs0eBGlRstQjdogaPp8V1KEoyQzEeLcenYuFpC2QB7nxNH1uJjJHQtyxnmQeatTN4kGmSmq+LKixOE8M3yM5c0tOWDXvwmn7BGvmLmSGs9CHU4fBYDAY/B2+AHCKJT2UsNePAAAAAElFTkSuQmCC",
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    bYear: {
      type: String,
      required: true,
    },

    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    request: {
      type: Array,
      default: [],
    },
    Search: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
      },
    ],
    detail: {
      bio: {
        type: String,
      },
      nickname: {
        type: String,
      },
      job: {
        tyep: String,
      },
      workplace: {
        type: String,
      },
      highschool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: ["single", "married", "divorced", "in relation ship"],
      },
      instagram: {
        type: String,
      },
      savedpost: [
        {
          post: {
            type: mongoose.Schema.ObjectId,
            ref: "Post",
          },
          savedat: {
            type: Date,
            default: new Date(),
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.add({
  bMonth: {
    type: String,
    required: true,
  },
  bDay: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
