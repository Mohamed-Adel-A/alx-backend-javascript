import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let respond = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    respond = { photo, user };
  } catch (err) {
    respond = { photo: null, user: null };
  }
  return respond;
}

export default asyncUploadUser;
