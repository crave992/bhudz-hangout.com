import { auth, firestore } from '@/firebase/config';
import { User, UserModel } from '@/services/User.model';

export const registerUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  middleName: string | null,
  birthDate: Date,
  status: 'superadmin' | 'admin' | 'guest',
  phoneNumber: string
): Promise<User> => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  if (!user) {
    throw new Error('User registration failed');
  }

  const displayName = `${firstName} ${lastName}`;
  await user.updateProfile({ displayName });
  const dateCreated = new Date();
  const dateUpdated = dateCreated;
  const userData: User = {
    uid: user.uid,
    email: user.email,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
    firstName,
    lastName,
    middleName,
    birthDate,
    status,
    phoneNumber,
    dateCreated,
    dateUpdated
  };
  await firestore.collection('users').doc(user.uid).set(userData)
  return userData;
};

export const getAllUsers = async (): Promise<User[]> => {
    const usersSnapshot = await firestore.collection('users').get();
    const users: User[] = usersSnapshot.docs.map((doc) => {
      const userData = doc.data() as User;
      return new UserModel(
        userData.uid,
        userData.email ?? null,
        userData.photoURL ?? null,
        userData.emailVerified,
        userData.firstName,
        userData.lastName,
        userData.middleName ?? null,
        userData.birthDate,
        userData.status,
        userData.phoneNumber,
        userData.dateCreated,
        userData.dateUpdated
      );
    });
    return users;
  };

export const loginUser = async (email: string, password: string): Promise<User> => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);

  if (!user) {
    throw new Error('User login failed');
  }

  const userDoc = await firestore.collection('users').doc(user.uid).get();
  const userData = userDoc.data() as User;
  return userData;
};

export const updateUser = async (uid: string, updates: Partial<User>): Promise<void> => {
  await firestore.collection('users').doc(uid).update(updates);
};

export const deleteUser = async (uid: string): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error('No user is currently signed in');
  }

  await auth.currentUser.delete();
  await firestore.collection('users').doc(uid).delete();
};

export const deleteMultipleUsers = async (uids: string[]): Promise<void> => {
  const batch = firestore.batch();
  uids.forEach((uid) => {
    const userRef = firestore.collection('users').doc(uid);
    batch.delete(userRef);
  });
  await batch.commit();
};