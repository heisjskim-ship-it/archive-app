import React, { useState, useEffect } from 'react';

// ==============================================
// 🎨 순수 SVG 아이콘 컴포넌트 내장 (웹접근성 및 안정성 확보)
// ==============================================
const BookOpen = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>;
const Upload = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>;
const Filter = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>;
const CheckCircle = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
const User = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const Plus = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
const Trash2 = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>;
const Eye = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
const LogOut = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>;
const FileText = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>;
const ChevronRight = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6" /></svg>;
const Check = ({ size = 24, className = "", strokeWidth = 2 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12" /></svg>;
const AlertCircle = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
const Search = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
const Users = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const UserPlus = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="16" y1="11" x2="22" y2="11" /></svg>;
const Key = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>;
const ShieldAlert = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
const MessageSquare = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
const Sparkles = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" /></svg>;
const LogIn = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>;
const Pin = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const Trophy = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" /><path d="M12 2a6 6 0 0 1 6 6v3.5c0 3.3-2.7 6-6 6s-6-2.7-6-6V8a6 6 0 0 1 6-6z" /></svg>;
const MessageCircle = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.5 0 0 1 8 8v.5z" /></svg>;
const ImageIcon = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>;
const X = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
const ArrowRight = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
const ArrowLeft = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;
const Loader2 = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} animate-spin`}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>;
const Edit = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z" /></svg>;
const Download = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
const Award = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>;

import { initializeApp } from 'firebase/app';
import { 
  getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged, 
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
  setPersistence, browserLocalPersistence, browserSessionPersistence
} from 'firebase/auth';
import { 
  getFirestore, collection, doc, setDoc, onSnapshot, addDoc, deleteDoc, updateDoc, getDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFai50jHiNpwyZl9c16MsetXzIbWRp7x8",
  authDomain: "archiveapp-641a2.firebaseapp.com",
  projectId: "archiveapp-641a2",
  storageBucket: "archiveapp-641a2.firebasestorage.app",
  messagingSenderId: "660826476743",
  appId: "1:660826476743:web:75f1d50283d75b50302ee2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const isCanvas = typeof __app_id !== 'undefined';
const canvasAppId = isCanvas ? __app_id : 'default-app-id';

/** @param {string} colName */
const getColRef = (colName) => {
  if (isCanvas) return collection(db, 'artifacts', canvasAppId, 'public', 'data', colName);
  return collection(db, colName);
};

/** @param {File} file */
const uploadToCloudinary = async (file) => {
  const cloudName = "dyhaocbcx"; 
  const uploadPreset = "archive_preset"; 

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  const response = await fetch(url, { method: 'POST', body: formData });
  if (!response.ok) throw new Error('Cloudinary 이미지 업로드 실패');
  
  const data = await response.json();
  return data.secure_url;
};

const formatDateTime = (isoString) => {
  if (!isoString) return '미기록';
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return isoString;
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
};

const anonymizeName = (name) => {
  if (!name) return '알수없음';
  if (name.length <= 2) return name.charAt(0) + '*';
  return name.charAt(0) + '*'.repeat(name.length - 2) + name.charAt(name.length - 1);
};

export default function App() {
  const [firebaseUser, setFirebaseUser] = useState(null); 
  const [currentUser, setCurrentUser] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 
  
  const [authModal, setAuthModal] = useState({ show: false, mode: 'student_login' }); 
  const [loginIdInput, setLoginIdInput] = useState('');
  const [loginPwInput, setLoginPwInput] = useState('');
  const [signUpNo, setSignUpNo] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpId, setSignUpId] = useState('');
  const [signUpPw, setSignUpPw] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);

  const [tutorial, setTutorial] = useState({ show: false, role: '', step: 0 });

  const [questions, setQuestions] = useState([]);
  const [students, setStudents] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const [teacherSubTab, setTeacherSubTab] = useState('content');
  const [draftStudents, setDraftStudents] = useState([
    { rowId: 1, no: '', name: '', username: '' },
    { rowId: 2, no: '', name: '', username: '' },
    { rowId: 3, no: '', name: '', username: '' },
  ]);

  const [newQuestion, setNewQuestion] = useState({ title: '', tags: [], currentTagInput: '', images: [], imagePreviews: [], isPinned: false, isChallenge: false });
  const [teacherQuestionSearch, setTeacherQuestionSearch] = useState('');
  const [submissionSearch, setSubmissionSearch] = useState('');
  const [studentSearch, setStudentSearch] = useState('');

  const [editQuestionModal, setEditQuestionModal] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const [activeFeedbackSubmissionId, setActiveFeedbackSubmissionId] = useState(null);
  const [feedbackInputText, setFeedbackInputText] = useState('');
  const [feedbackInputImage, setFeedbackInputImage] = useState(null);
  const [feedbackInputImagePreview, setFeedbackInputImagePreview] = useState('');

  const [studentQuestionModal, setStudentQuestionModal] = useState(false);
  const [studentNewQuestion, setStudentNewQuestion] = useState({ title: '', images: [], imagePreviews: [], isShared: true });

  const [activeTab, setActiveTab] = useState('all'); 
  const [studentQuestionSearch, setStudentQuestionSearch] = useState(''); 
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [qImageIdx, setQImageIdx] = useState(0); 

  const [studentSolutionImage, setStudentSolutionImage] = useState(null);
  const [studentSolutionPreview, setStudentSolutionPreview] = useState('');
  const [isSharedChecked, setIsSharedChecked] = useState(true);

  const [viewingSubmission, setViewingSubmission] = useState(null); 
  const [peerCommentInput, setPeerCommentInput] = useState('');
  const [peerCommentImage, setPeerCommentImage] = useState(null);
  const [peerCommentImagePreview, setPeerCommentImagePreview] = useState('');

  const [selectedAttemptIdx, setSelectedAttemptIdx] = useState(0); 
  const [isEditingSolution, setIsEditingSolution] = useState(false);

  const [lightbox, setLightbox] = useState({ show: false, imageUrl: '', title: '' });
  const [confirmModal, setConfirmModal] = useState({ show: false, title: '', message: '', onConfirm: null, isDanger: false });
  const [alert, setAlert] = useState({ show: false, message: '' });

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [appInstallModal, setAppInstallModal] = useState(false);

  const alertMessage = (msg) => { setAlert({ show: true, message: msg }); setTimeout(() => setAlert({ show: false, message: '' }), 3500); };
  const openLightbox = (imageUrl, title) => setLightbox({ show: true, imageUrl, title });

  const currentViewingSubmission = viewingSubmission
    ? (submissions.find(s => s.id === viewingSubmission.id) || viewingSubmission)
    : null;

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      } else {
        setAppInstallModal(true);
      }
    } else {
      setAppInstallModal(true);
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      if (isCanvas) {
        try {
          if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
          } else {
            await signInAnonymously(auth);
          }
        } catch (err) {
          console.warn("Custom token error detected, falling back safely.", err);
          try {
            await signInAnonymously(auth);
          } catch (anonymousErr) {
            console.error("Critical authentication failure", anonymousErr);
          }
        }
      }
    };
    initAuth();
    
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user && !user.isAnonymous) {
        try {
          const userDocRef = doc(getColRef('users'), user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData.role === 'pending_teacher') {
              await signOut(auth);
              setCurrentUser(null);
            } else {
              setCurrentUser({ id: user.uid, ...userData });
            }
          }
        } catch (err) {
          console.error(err);
        }
      } else {
        setCurrentUser(prev => (prev?.id === 'teacher_admin' ? prev : null));
      }
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (isCanvas && !firebaseUser) return;
    setIsLoading(true);
    const unsubQuestions = onSnapshot(getColRef('questions'), (snapshot) => {
      const qList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      qList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setQuestions(qList);
    });
    const unsubSubmissions = onSnapshot(getColRef('submissions'), (snapshot) => {
      const sList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      sList.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
      setSubmissions(sList);
    });
    const unsubStudents = onSnapshot(getColRef('users'), (snapshot) => {
      const uList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllUsers(uList);
      setStudents(uList.filter(u => u.role === 'student'));
      setIsLoading(false);
    }, (err) => { console.error(err); setIsLoading(false); });

    return () => { unsubQuestions(); unsubSubmissions(); unsubStudents(); };
  }, [firebaseUser]);

  useEffect(() => {
    setQImageIdx(0);
    setIsEditingSolution(false);
    
    const targetSub = currentViewingSubmission || submissions.find(s => s.questionId === selectedQuestion?.id && s.studentId === currentUser?.id);
    if (targetSub) {
      const attemptsCount = targetSub.attempts ? targetSub.attempts.length : 1;
      setSelectedAttemptIdx(attemptsCount - 1); 
    }
  }, [selectedQuestion?.id, currentViewingSubmission?.id, submissions.length]);

  useEffect(() => {
    const handlePaste = (e) => {
      if (tutorial.show || isLoading) return;
      
      const clipboardData = e.clipboardData;
      if (!clipboardData) return;
      
      let imageFile = null;
      
      if (clipboardData.files && clipboardData.files.length > 0) {
        for (let i = 0; i < clipboardData.files.length; i++) {
          if (clipboardData.files[i].type.startsWith('image/')) {
            imageFile = clipboardData.files[i];
            break;
          }
        }
      }
      
      if (!imageFile && clipboardData.items) {
        for (let i = 0; i < clipboardData.items.length; i++) {
          if (clipboardData.items[i].type.indexOf('image') !== -1) {
            imageFile = clipboardData.items[i].getAsFile();
            break;
          }
        }
      }
      
      if (!imageFile) return;
      e.preventDefault();

      if (studentQuestionModal) {
        setStudentNewQuestion(prev => ({ 
          ...prev, 
          images: [...prev.images, imageFile], 
          imagePreviews: [...prev.imagePreviews, URL.createObjectURL(imageFile)] 
        }));
        alertMessage('📌 클립보드 질문 이미지 추가');
      } else if (editQuestionModal && editingQuestion) {
        setEditingQuestion(prev => ({
          ...prev,
          items: [...prev.items, { url: URL.createObjectURL(imageFile), file: imageFile }]
        }));
        alertMessage('📌 수정용 클립보드 이미지 추가 완료');
      } else if (selectedQuestion) {
        if (currentUser?.role === 'student') {
          const hasSubmitted = submissions.some(s => s.questionId === selectedQuestion.id && s.studentId === currentUser.id);
          
          if (currentViewingSubmission) {
            setPeerCommentImage(imageFile); 
            setPeerCommentImagePreview(URL.createObjectURL(imageFile)); 
            alertMessage('📌 댓글용 이미지 첨부 완료');
          } else if (!hasSubmitted || isEditingSolution) {
            setStudentSolutionImage(imageFile); 
            setStudentSolutionPreview(URL.createObjectURL(imageFile)); 
            alertMessage('📌 풀이 이미지 첨부 완료');
          }
        } else if (currentUser?.role === 'teacher') {
          if (currentViewingSubmission) {
            setFeedbackInputImage(imageFile); 
            setFeedbackInputImagePreview(URL.createObjectURL(imageFile)); 
            alertMessage('📌 클립보드 첨삭 추가 완료');
          }
        }
      } else {
        if (currentUser?.role === 'teacher' && teacherSubTab === 'content') {
          setNewQuestion(prev => ({ 
            ...prev, 
            images: [...prev.images, imageFile], 
            imagePreviews: [...prev.imagePreviews, URL.createObjectURL(imageFile)] 
          }));
          alertMessage('📌 클립보드 기출문제 추가 완료');
        }
      }
    };
    
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [selectedQuestion, currentUser, currentViewingSubmission, teacherSubTab, tutorial.show, isLoading, isEditingSolution, studentQuestionModal, editQuestionModal, editingQuestion, submissions]);

  const generateEmail = (username) => `${username}@archive.edu`;

  const handleStudentSignUp = async (e) => {
    e.preventDefault();
    if (!signUpNo.trim() || !signUpName.trim() || !signUpId.trim() || !signUpPw.trim()) return alertMessage('정보를 모두 입력해 주세요.');
    if (signUpPw.trim().length < 6) return alertMessage('보안을 위해 비밀번호는 최소 6자 이상으로 설정해 주세요! 🔐');

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, generateEmail(signUpId.trim()), signUpPw.trim());
      const newStudentData = {
        role: 'student', studentNumber: signUpNo.trim(), name: signUpName.trim(), username: signUpId.trim(),
        joinDate: new Date().toISOString().split('T')[0], loginCount: 1, status: '활동중', hasSeenTutorial: false
      };
      await setDoc(doc(getColRef('users'), userCredential.user.uid), newStudentData);
      setCurrentUser({ id: userCredential.user.uid, ...newStudentData });
      setAuthModal({ show: false, mode: 'student_login' });
      setSignUpNo(''); setSignUpName(''); setSignUpId(''); setSignUpPw('');
      setTutorial({ show: true, role: 'student', step: 0 });
    } catch (error) { 
      const err = error; 
      alertMessage(err.code === 'auth/email-already-in-use' ? '이미 사용 중인 아이디입니다.' : '가입 실패: ' + err.message); 
    } finally { 
      setIsLoading(false); 
    }
  };

  const handleTeacherSignUp = async (e) => {
    e.preventDefault();
    if (!signUpName.trim() || !signUpId.trim() || !signUpPw.trim()) return alertMessage('정보를 모두 입력해 주세요.');
    if (signUpPw.trim().length < 6) return alertMessage('보안을 위해 비밀번호는 최소 6자 이상으로 설정해 주세요! 🔐');

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, generateEmail(signUpId.trim()), signUpPw.trim());
      const newTeacherData = {
        role: 'pending_teacher', name: signUpName.trim(), username: signUpId.trim(),
        joinDate: new Date().toISOString().split('T')[0], loginCount: 0, status: '승인대기'
      };
      await setDoc(doc(getColRef('users'), userCredential.user.uid), newTeacherData);
      await signOut(auth);
      setAuthModal({ show: false, mode: 'student_login' });
      alertMessage('✨ [' + signUpName + '] 선생님의 권한 신청이 정상 등록되었습니다! 최고 관리자(admin) 승인 후 로그인이 가능합니다.');
      setSignUpName(''); setSignUpId(''); setSignUpPw('');
    } catch (error) { 
      const err = error; 
      alertMessage(err.code === 'auth/email-already-in-use' ? '이미 가입 신청된 교사 아이디입니다.' : '신청 실패: ' + err.message); 
    } finally { 
      setIsLoading(false); 
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginIdInput.trim() || !loginPwInput.trim()) return alertMessage('아이디와 비밀번호를 입력해 주세요.');
    setIsLoading(true);
    try {
      await setPersistence(auth, keepLoggedIn ? browserLocalPersistence : browserSessionPersistence);

      if (authModal.mode === 'teacher_login' && loginIdInput.trim() === 'admin' && loginPwInput.trim() === 'tlagkr1!') {
        setCurrentUser({ id: 'teacher_admin', name: '최고 관리자', role: 'teacher' });
        setAuthModal({ show: false, mode: 'student_login' }); 
        alertMessage('최고 관리자 모드로 로그인했습니다. 교사 임용 및 회원 관리가 가능합니다. 👑'); 
        return;
      }
      
      const userCredential = await signInWithEmailAndPassword(auth, generateEmail(loginIdInput.trim()), loginPwInput.trim());
      const userDocRef = doc(getColRef('users'), userCredential.user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.role === 'pending_teacher') {
          await signOut(auth);
          throw new Error('아직 최고 관리자의 임용 승인을 받지 못한 계정입니다. 승인 후 다시 시도해 주세요!');
        }
        if (authModal.mode === 'teacher_login' && userData.role !== 'teacher') {
          await signOut(auth);
          throw new Error('교사 권한이 없는 계정입니다.');
        }
        if (authModal.mode === 'student_login' && userData.role !== 'student') {
          await signOut(auth);
          throw new Error('학생 권한이 없는 계정입니다.');
        }

        await updateDoc(userDocRef, { loginCount: (userData.loginCount || 0) + 1 });
        setCurrentUser({ id: userCredential.user.uid, ...userData, loginCount: (userData.loginCount || 0) + 1 });
        setAuthModal({ show: false, mode: 'student_login' });
        
        if (userData.role === 'student' && !userData.hasSeenTutorial) {
          setTutorial({ show: true, role: 'student', step: 0 });
        } else {
          alertMessage('반가워요, ' + userData.name + (userData.role === 'teacher' ? ' 선생님!' : ' 학생!'));
        }
      } else {
        throw new Error('회원 정보가 없습니다.');
      }
    } catch (error) { 
      const err = error; 
      alertMessage(err.message || '아이디 또는 비밀번호 오류입니다.'); 
    } finally { 
      setIsLoading(false); setLoginIdInput(''); setLoginPwInput(''); 
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      setCurrentUser(null); setStudentQuestionSearch(''); setSubmissionSearch(''); setTeacherQuestionSearch(''); setTeacherSubTab('content'); setViewingSubmission(null); setSelectedQuestion(null);
      alertMessage('안전하게 로그아웃되었습니다.');
    } catch (err) { console.error(err); } finally { setIsLoading(false); }
  };

  const completeTutorial = async () => {
    if (tutorial.role === 'student' && currentUser && currentUser.id !== 'teacher_admin') {
      await updateDoc(doc(getColRef('users'), currentUser.id), { hasSeenTutorial: true });
      alertMessage('튜토리얼을 마쳤습니다. 자유롭게 학습하세요!');
    } else { alertMessage('튜토리얼 완료!'); }
    setTutorial({ show: false, role: '', step: 0 });
  };

  const handleDraftChange = (rowId, field, value) => setDraftStudents(draftStudents.map(row => row.rowId === rowId ? { ...row, [field]: value } : row));
  const handleAddDraftRow = () => setDraftStudents([...draftStudents, { rowId: Date.now(), no: '', name: '', username: '' }]);
  const handleRemoveDraftRow = (rowId) => {
    if (draftStudents.length === 1) return alertMessage('최소 1줄은 필요합니다.');
    setDraftStudents(draftStudents.filter(row => row.rowId !== rowId));
  };

  const handleSaveDraftStudents = async () => {
    const validRows = draftStudents.filter(row => row.no.trim() || row.name.trim() || row.username.trim());
    if (validRows.length === 0) return alertMessage('등록할 학생 정보를 1명 이상 입력해주세요.');
    setIsLoading(true);
    let successCount = 0;
    for (const row of validRows) {
      if (!row.no.trim() || !row.name.trim() || !row.username.trim()) { alertMessage('행의 빈칸을 모두 채워주세요.'); setIsLoading(false); return; }
      try {
        const userCred = await createUserWithEmailAndPassword(auth, generateEmail(row.username.trim()), '123456');
        await setDoc(doc(getColRef('users'), userCred.user.uid), {
          role: 'student', studentNumber: row.no.trim(), name: row.name.trim(), username: row.username.trim(),
          joinDate: new Date().toISOString().split('T')[0], loginCount: 0, status: '활동중', hasSeenTutorial: false
        });
        successCount++;
      } catch (err) { console.error("다중 등록 에러", err); }
    }
    setIsLoading(false);
    alertMessage('총 ' + successCount + '명 등록 완료 (초기비번 123456)');
    setDraftStudents([{ rowId: 1, no: '', name: '', username: '' }, { rowId: 2, no: '', name: '', username: '' }]);
  };

  const handleApproveTeacher = async (teacher) => {
    setIsLoading(true);
    try {
      await updateDoc(doc(getColRef('users'), teacher.id), { role: 'teacher', status: '활동중' });
      alertMessage('[' + teacher.name + '] 선생님의 임용 승인이 완료되었습니다! 이제 로그인이 가능합니다.');
    } catch (err) {
      alertMessage('승인 오류: ' + err.message);
    } finally { setIsLoading(false); }
  };

  const handleRejectTeacher = async (teacher) => {
    setConfirmModal({
      show: true, title: '삭제 확인', message: '[' + teacher.name + '] 계정을 삭제하시겠습니까?', isDanger: true,
      onConfirm: async () => {
        setIsLoading(true);
        try { await deleteDoc(doc(getColRef('users'), teacher.id)); alertMessage('정상적으로 삭제 처리되었습니다.'); } 
        catch (err) { alertMessage('오류: ' + err.message); } 
        finally { setIsLoading(false); setConfirmModal({ show: false, title: '', message: '', onConfirm: null, isDanger: false }); }
      }
    });
  };

  const openEditQuestionModal = (q) => {
    setEditingQuestion({
      id: q.id,
      title: q.title,
      tags: q.tags,
      currentTagInput: '',
      isPinned: q.isPinned,
      isChallenge: q.isChallenge,
      isStudentQuestion: q.isStudentQuestion,
      items: q.imageUrls.map(url => ({ url }))
    });
    setEditQuestionModal(true);
  };

  const handleUpdateQuestionSubmit = async (e) => {
    e.preventDefault();
    if (!editingQuestion.title.trim() || editingQuestion.tags.length === 0 || editingQuestion.items.length === 0) {
      return alertMessage('타이틀, 해시태그, 이미지를 모두 입력해 주세요!');
    }
    setIsLoading(true);
    try {
      const finalImageUrls = [];
      for (const item of editingQuestion.items) {
        if (item.file) finalImageUrls.push(await uploadToCloudinary(item.file));
        else finalImageUrls.push(item.url);
      }
      await updateDoc(doc(getColRef('questions'), editingQuestion.id), {
        title: editingQuestion.title, tags: editingQuestion.tags, imageUrls: finalImageUrls,
        isPinned: editingQuestion.isPinned, isChallenge: editingQuestion.isChallenge
      });
      alertMessage('기출 및 질문 세트의 정보가 깔끔하게 수정되었습니다! ✨');
      setEditQuestionModal(false); setEditingQuestion(null);
    } catch (err) {
      alertMessage('수정 실패: ' + err.message);
    } finally { setIsLoading(false); }
  };

  const handleResetPassword = (student) => {
    setConfirmModal({
      show: true, title: '비밀번호 강제 초기화', message: '[' + student.name + '] 비밀번호를 [123456]로 초기화합니다.', isDanger: false,
      onConfirm: async () => {
        setIsLoading(true); alertMessage('[' + student.name + "] 학생 비밀번호가 '123456'으로 초기화되었습니다.");
        setIsLoading(false); setConfirmModal({ show: false, title: '', message: '', onConfirm: null, isDanger: false });
      }
    });
  };

  const handleDeleteStudent = (student) => {
    setConfirmModal({
      show: true, title: '학생 제명', message: '[' + student.name + '] 데이터를 삭제합니다.', isDanger: true,
      onConfirm: async () => {
        setIsLoading(true);
        try { await deleteDoc(doc(getColRef('users'), student.id)); alertMessage('삭제됨.'); } 
        catch(err) { alertMessage('오류: ' + err.message); } 
        finally { setIsLoading(false); setConfirmModal({ show: false, title: '', message: '', onConfirm: null, isDanger: false }); }
      }
    });
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); const val = newQuestion.currentTagInput.trim().replace(/^#/, '');
      if (val && !newQuestion.tags.includes(val)) setNewQuestion({ ...newQuestion, tags: [...newQuestion.tags, val], currentTagInput: '' });
    }
  };
  const removeTag = (tagToRemove) => setNewQuestion({ ...newQuestion, tags: newQuestion.tags.filter(t => t !== tagToRemove) });

  const handleQuestionImageChange = (e) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 0) setNewQuestion(prev => ({ ...prev, images: [...prev.images, ...files], imagePreviews: [...prev.imagePreviews, ...files.map(f => URL.createObjectURL(f))] }));
  };
  const handleDropQuestion = (e) => {
    e.preventDefault(); const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    if (files.length > 0) setNewQuestion(prev => ({ ...prev, images: [...prev.images, ...files], imagePreviews: [...prev.imagePreviews, ...files.map(f => URL.createObjectURL(f))] }));
  };
  const removeQuestionPreview = (index) => setNewQuestion(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index), imagePreviews: prev.imagePreviews.filter((_, i) => i !== index) }));

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    if (!newQuestion.title.trim() || newQuestion.tags.length === 0 || newQuestion.images.length === 0) return alertMessage('타이틀, 해시태그, 이미지를 등록해주세요!');
    setIsLoading(true);
    try {
      const uploadedImageUrls = [];
      for (const file of newQuestion.images) { uploadedImageUrls.push(await uploadToCloudinary(file)); }
      const questionData = {
        title: newQuestion.title, tags: newQuestion.tags, imageUrls: uploadedImageUrls,
        createdAt: new Date().toISOString(), teacherName: currentUser.name, teacherId: currentUser.id,
        isPinned: newQuestion.isPinned, isChallenge: newQuestion.isChallenge, isStudentQuestion: false
      };
      await addDoc(getColRef('questions'), questionData);
      alertMessage('새로운 문제가 등록되었습니다!');
      setNewQuestion({ title: '', tags: [], currentTagInput: '', images: [], imagePreviews: [], isPinned: false, isChallenge: false });
    } catch (err) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const handleDeleteQuestionConfirm = (id) => {
    setConfirmModal({
      show: true, title: '기출문제 영구 삭제', message: '이 기출문제를 삭제하시겠습니까?', isDanger: true,
      onConfirm: async () => {
        setIsLoading(true);
        try { await deleteDoc(doc(getColRef('questions'), id)); alertMessage('삭제되었습니다.'); } 
        catch(err) { alertMessage('오류: ' + err.message); } 
        finally { setIsLoading(false); setConfirmModal({ show: false, title: '', message: '', onConfirm: null, isDanger: false }); }
      }
    });
  };

  const handleStudentAddQuestion = async (e) => {
    e.preventDefault();
    if (!studentNewQuestion.title.trim() || studentNewQuestion.images.length === 0) return alertMessage('질문 제목과 문제 이미지를 모두 등록해주세요!');
    setIsLoading(true);
    try {
      const uploadedImageUrls = [];
      for (const file of studentNewQuestion.images) { uploadedImageUrls.push(await uploadToCloudinary(file)); }
      const questionData = {
        title: studentNewQuestion.title, tags: ['질문있어요'], imageUrls: uploadedImageUrls,
        createdAt: new Date().toISOString(), teacherName: currentUser.name, teacherId: currentUser.id,
        isPinned: false, isChallenge: studentNewQuestion.isShared, isStudentQuestion: true
      };
      await addDoc(getColRef('questions'), questionData);
      alertMessage('질문이 성공적으로 등록되었습니다!');
      setStudentNewQuestion({ title: '', images: [], imagePreviews: [], isShared: true });
      setStudentQuestionModal(false);
    } catch (err) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const handleSubmitSolution = async (e) => {
    e.preventDefault();
    if (!studentSolutionImage) return alertMessage('풀이 이미지를 첨부해주세요!');
    setIsLoading(true);
    try {
      const downloadUrl = await uploadToCloudinary(studentSolutionImage);
      const existingSub = submissions.find(s => s.questionId === selectedQuestion.id && s.studentId === currentUser.id);

      if (existingSub) {
        const oldAttempts = existingSub.attempts || [{ 
          imageUrl: existingSub.imageUrl, feedbackText: existingSub.feedbackText || '', 
          feedbackImageUrl: existingSub.feedbackImageUrl || '', submittedAt: existingSub.submittedAt 
        }];
        const newAttempt = { imageUrl: downloadUrl, submittedAt: new Date().toISOString(), feedbackText: '', feedbackImageUrl: '' };
        await updateDoc(doc(getColRef('submissions'), existingSub.id), {
          attempts: [...oldAttempts, newAttempt], imageUrl: downloadUrl, status: '피드백 대기', feedbackText: '', feedbackImageUrl: '', submittedAt: new Date().toISOString()
        });
        alertMessage('새로운 풀이(회차)가 추가로 제출되었습니다!');
      } else {
        const newSubmission = {
          questionId: selectedQuestion.id, studentId: currentUser.id, studentName: currentUser.name,
          submittedAt: new Date().toISOString(), imageUrl: downloadUrl, status: '피드백 대기',
          feedbackImageUrl: '', feedbackText: '', feedbackAt: '',
          isShared: selectedQuestion.isChallenge ? isSharedChecked : false, peerComments: [],
          attempts: [{ imageUrl: downloadUrl, submittedAt: new Date().toISOString(), feedbackText: '', feedbackImageUrl: '' }]
        };
        await addDoc(getColRef('submissions'), newSubmission);
        alertMessage('성공적으로 제출되었습니다!');
      }
      setStudentSolutionImage(null); setStudentSolutionPreview(''); setSelectedQuestion(null); setIsEditingSolution(false);
    } catch (err) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const handleSaveFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackInputText.trim() && !feedbackInputImage) return alertMessage('코멘트나 첨삭 이미지 중 하나는 필수입니다.');
    setIsLoading(true);
    try {
      const attempts = currentViewingSubmission.attempts || [{ imageUrl: currentViewingSubmission.imageUrl, feedbackText: currentViewingSubmission.feedbackText, feedbackImageUrl: currentViewingSubmission.feedbackImageUrl, submittedAt: currentViewingSubmission.submittedAt }];
      let finalFeedbackUrl = attempts[selectedAttemptIdx]?.feedbackImageUrl || '';
      if (feedbackInputImage) { finalFeedbackUrl = await uploadToCloudinary(feedbackInputImage); }

      attempts[selectedAttemptIdx].feedbackText = feedbackInputText;
      attempts[selectedAttemptIdx].feedbackImageUrl = finalFeedbackUrl;
      attempts[selectedAttemptIdx].feedbackAt = new Date().toISOString();

      let topLevelUpdates = {};
      if (selectedAttemptIdx === attempts.length - 1) {
        topLevelUpdates = { feedbackText: feedbackInputText, feedbackImageUrl: finalFeedbackUrl, feedbackAt: attempts[selectedAttemptIdx].feedbackAt, status: '피드백 완료' };
      }

      await updateDoc(doc(getColRef('submissions'), activeFeedbackSubmissionId), { attempts: attempts, ...topLevelUpdates });
      alertMessage('첨삭 피드백 전달 완료!');
      setViewingSubmission(null); setSelectedQuestion(null); setActiveFeedbackSubmissionId(null);
      setFeedbackInputText(''); setFeedbackInputImage(null); setFeedbackInputImagePreview('');
    } catch (err) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const handlePeerCommentSubmit = async (e, targetSubId) => {
    e.preventDefault();
    if (!peerCommentInput.trim() && !peerCommentImage) return; 
    setIsLoading(true);
    try {
      let imgUrl = '';
      if (peerCommentImage) { imgUrl = await uploadToCloudinary(peerCommentImage); }
      const targetSub = submissions.find(s => s.id === targetSubId);
      const newComment = { id: `c-${Date.now()}`, authorName: currentUser.name, text: peerCommentInput, imageUrl: imgUrl, createdAt: new Date().toISOString() };
      
      await updateDoc(doc(getColRef('submissions'), targetSubId), { peerComments: [...(targetSub?.peerComments || []), newComment] });
      setPeerCommentInput(''); setPeerCommentImage(null); setPeerCommentImagePreview('');
      alertMessage('답변/댓글 등록 완료!');
    } catch (err) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const filteredStudentQuestions = questions.filter(q => {
    const query = studentQuestionSearch.trim().toLowerCase();
    let matchQuery = true;
    if (query) {
      const cleanQuery = query.startsWith('#') ? query.slice(1) : query;
      matchQuery = q.title.toLowerCase().includes(cleanQuery) || q.tags.some((tag) => tag.toLowerCase().includes(cleanQuery)) || q.teacherName.toLowerCase().includes(cleanQuery);
    }
    if (activeTab === 'my' && currentUser) {
      const solvedQuestionIds = submissions.filter(s => s.studentId === currentUser.id).map(s => s.questionId);
      return solvedQuestionIds.includes(q.id) && matchQuery;
    }
    return matchQuery;
  });

  const pinnedQuestions = filteredStudentQuestions.filter(q => q.isPinned);
  const regularQuestions = filteredStudentQuestions.filter(q => !q.isPinned);

  const filteredTeacherQuestions = questions.filter(q => {
    const query = teacherQuestionSearch.trim().toLowerCase();
    if (!query) return true;
    const cleanQuery = query.startsWith('#') ? query.slice(1) : query;
    return q.title.toLowerCase().includes(cleanQuery) || q.tags.some((tag) => tag.toLowerCase().includes(cleanQuery));
  });

  const filteredSubmissions = submissions.filter(sub => {
    const relatedQ = questions.find(q => q.id === sub.questionId) || {};
    const query = submissionSearch.trim().toLowerCase();
    if (!query) return true;
    const cleanQuery = query.startsWith('#') ? query.slice(1) : query;
    return (sub.studentName.toLowerCase().includes(cleanQuery) || relatedQ.tags?.some((tag) => tag.toLowerCase().includes(cleanQuery)) || relatedQ.title?.toLowerCase().includes(cleanQuery) || sub.status.toLowerCase().includes(cleanQuery));
  });

  const filteredStudents = students.filter(st => {
    const query = studentSearch.trim().toLowerCase();
    if (!query) return true;
    return (
      (st.studentNumber && st.studentNumber.toLowerCase().includes(query)) ||
      (st.name && st.name.toLowerCase().includes(query)) ||
      (st.username && st.username.toLowerCase().includes(query))
    );
  });

  const pendingTeachers = allUsers.filter(u => u.role === 'pending_teacher');
  const approvedTeachers = allUsers.filter(u => u.role === 'teacher' && u.id !== 'teacher_admin');

  const rankingData = students.map(student => {
    const mySubmissionsCount = submissions.filter(s => s.studentId === student.id).length;
    const myQuestionsCount = questions.filter(q => q.teacherId === student.id && q.isStudentQuestion).length;
    let myCommentsCount = 0;
    submissions.forEach(s => {
      if (s.peerComments) {
        myCommentsCount += s.peerComments.filter(c => c.authorName === student.name).length;
      }
    });
    const totalScore = (mySubmissionsCount * 10) + (myQuestionsCount * 5) + (myCommentsCount * 3);
    return { ...student, totalScore, mySubmissionsCount, myQuestionsCount, myCommentsCount };
  }).filter(s => s.totalScore > 0).sort((a, b) => b.totalScore - a.totalScore).slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col relative select-none">
      
      <style>{`
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 9999px; border: 2px solid transparent; background-clip: padding-box; }
        ::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }
        * { scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent; }
      `}</style>

      {/* 1. 글로벌 로더 및 스피너 */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center justify-center z-[200]">
          <Loader2 className="text-white animate-spin mb-3" size={48} />
          <p className="text-white font-bold text-sm tracking-widest animate-pulse">데이터 처리 중...</p>
        </div>
      )}

      {/* 2. 질문 모달 */}
      {studentQuestionModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2"><Sparkles className="text-amber-500"/> 모르는 문제 질문하기</h3>
              <button onClick={() => setStudentQuestionModal(false)} className="text-slate-400 hover:bg-slate-100 p-1.5 rounded-full"><X size={18}/></button>
            </div>
            <form onSubmit={handleStudentAddQuestion} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">질문 제목</label>
                <input type="text" value={studentNewQuestion.title} onChange={e => setStudentNewQuestion({...studentNewQuestion, title: e.target.value})} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="예: 2024 수능 22번 모르겠어요" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">질문할 문제 이미지 (Ctrl+V 지원)</label>
                <div className="border-2 border-dashed border-amber-200 rounded-xl p-4 text-center bg-amber-50/30">
                  {studentNewQuestion.imagePreviews.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {studentNewQuestion.imagePreviews.map((preview, idx) => (
                        <div key={idx} className="relative group border rounded-lg overflow-hidden">
                          <img src={preview} alt="미리보기" className="h-20 w-full object-cover"/>
                          <button type="button" onClick={() => setStudentNewQuestion(p => ({...p, images: p.images.filter((_, i)=>i!==idx), imagePreviews: p.imagePreviews.filter((_, i)=>i!==idx)}))} className="absolute top-1 right-1 bg-red-500 text-white p-0.5 rounded-full"><X size={12}/></button>
                        </div>
                      ))}
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-amber-300 rounded-lg hover:bg-amber-100 cursor-pointer min-h-[5rem]">
                        <Plus size={20} className="text-amber-500" />
                        <input type="file" multiple accept="image/*" onChange={(e)=>{const f=e.target.files?Array.from(e.target.files):[]; if(f.length>0)setStudentNewQuestion(p=>({...p, images:[...p.images,...f], imagePreviews:[...p.imagePreviews,...f.map(file=>URL.createObjectURL(file))]}));}} className="hidden" />
                      </label>
                    </div>
                  ) : (
                    <label className="cursor-pointer block py-4">
                      <Upload className="mx-auto text-amber-500 mb-2" size={24}/>
                      <span className="text-xs font-bold text-amber-600 block">이미지 첨부하기</span>
                      <input type="file" multiple accept="image/*" onChange={(e)=>{const f=e.target.files?Array.from(e.target.files):[]; if(f.length>0)setStudentNewQuestion(p=>({...p, images:[...p.images,...f], imagePreviews:[...p.imagePreviews,...f.map(file=>URL.createObjectURL(file))]}));}} className="hidden" />
                    </label>
                  )}
                </div>
              </div>
              <label className="flex items-start gap-2 bg-amber-50 p-3 rounded-xl border border-amber-100 cursor-pointer">
                <input type="checkbox" checked={studentNewQuestion.isShared} onChange={e => setStudentNewQuestion({...studentNewQuestion, isShared: e.target.checked})} className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4"/>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-amber-900">다른 학생들에게 질문 공개하기</span>
                  <span className="text-[10px] font-semibold text-amber-700 mt-1">체크 시, 친구들이 질문에 대해 이미지로 답변을 달아줄 수 있습니다! (#질문있어요 태그 자동 부여)</span>
                </div>
              </label>
              <button type="submit" disabled={isLoading} className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                질문 등록하기
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. PWA 가이드 모달 */}
      {appInstallModal && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 z-[90]">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-100">
            <button onClick={() => setAppInstallModal(false)} className="absolute top-4 right-4 text-slate-400 hover:bg-slate-100 p-1.5 rounded-full transition-colors"><X size={18}/></button>
            
            <div className="text-center mb-5">
              <div className="bg-indigo-50 text-indigo-600 p-3.5 rounded-full w-fit mx-auto mb-2.5">
                <Download size={28} />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900">홈 화면에 바로가기 앱 설치</h3>
              <p className="text-xs text-slate-500 mt-1">링크 입력 없이 스마트폰에서 1초 만에 바로 접속하세요!</p>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <h4 className="font-bold text-xs text-indigo-600 flex items-center gap-1.5 mb-2">🍎 아이폰 (Safari 사파리 브라우저)</h4>
                <ol className="list-decimal pl-4 text-xs font-semibold text-slate-600 space-y-1">
                  <li>Safari 브라우저 하단 중앙의 <b className="text-slate-900 bg-slate-200 px-1 py-0.5 rounded">공유(내보내기 📤)</b> 버튼을 탭합니다.</li>
                  <li>메뉴 목록을 아래로 스크롤하여 <b className="text-slate-900">홈 화면에 추가 (+)</b>를 선택합니다.</li>
                  <li>우측 상단 <b className="text-indigo-600">추가</b>를 누르면 설치가 완료됩니다!</li>
                </ol>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <h4 className="font-bold text-xs text-emerald-600 flex items-center gap-1.5 mb-2">🤖 안드로이드 (크롬 / 삼성 인터넷)</h4>
                <ol className="list-decimal pl-4 text-xs font-semibold text-slate-600 space-y-1">
                  <li>브라우저 상단 주소창 옆의 <b className="text-slate-900">설치 아이콘(📥)</b>을 터치하거나,</li>
                  <li>오른쪽 끝의 <b className="text-slate-900 bg-slate-200 px-1 py-0.5 rounded">메뉴(더보기 ፧)</b> 버튼을 누릅니다.</li>
                  <li><b className="text-slate-900">홈 화면에 추가</b> 또는 <b className="text-slate-900">앱 설치</b>를 탭합니다.</li>
                </ol>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <h4 className="font-bold text-xs text-slate-700 flex items-center gap-1.5 mb-2">💻 PC (크롬 / 엣지 브라우저)</h4>
                <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                  인터넷 주소창 우측에 있는 <b className="text-slate-900 bg-slate-200 px-1.5 py-0.5 rounded">앱 설치 아이콘(모니터 모양 🖥️)</b>을 누르거나, 메뉴의 '앱 설치'를 클릭해 보세요. 바탕화면에 바로 접속 아이콘이 생성됩니다.
                </p>
              </div>
            </div>

            <button onClick={() => setAppInstallModal(false)} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold mt-5 transition-colors shadow-md text-xs">확인 완료</button>
          </div>
        </div>
      )}

      {/* 4. 인증 및 로그온 모달 */}
      {authModal.show && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-between items-center mb-5 border-b pb-3">
              <h3 className="font-extrabold text-lg text-slate-900">
                {authModal.mode === 'student_register' ? '🚀 신규 학생 가입' : authModal.mode === 'teacher_register' ? '🧑‍🏫 교사 승인 신청' : authModal.mode === 'teacher_login' ? '🧑‍🏫 교사 로그인' : '✏️ 학생 로그인'}
              </h3>
              <button onClick={() => setAuthModal({ show: false, mode: 'student_login' })} className="text-slate-400 hover:bg-slate-100 p-1.5 rounded-full"><X size={18}/></button>
            </div>

            {authModal.mode === 'student_register' ? (
              <form onSubmit={handleStudentSignUp} className="space-y-3">
                <div><label className="text-xs font-bold text-slate-500">학번 (예: 30101)</label><input type="text" value={signUpNo} onChange={e=>setSignUpNo(e.target.value)} className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none" required/></div>
                <div><label className="text-xs font-bold text-slate-500">이름</label><input type="text" value={signUpName} onChange={e=>setSignUpName(e.target.value)} className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none" required/></div>
                <div><label className="text-xs font-bold text-slate-500">사용할 아이디 (ID)</label><input type="text" value={signUpId} onChange={e=>setSignUpId(e.target.value)} className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none" required/></div>
                <div>
                  <label className="flex justify-between items-center text-xs font-bold text-slate-500 mb-1"><span>비밀번호</span><span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">최소 6자 이상</span></label>
                  <input type="password" value={signUpPw} onChange={e=>setSignUpPw(e.target.value)} minLength={6} className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none" required/>
                </div>
                <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl mt-4 transition-all">가입 완료 및 접속</button>
                <button type="button" onClick={()=>setAuthModal({...authModal, mode:'student_login'})} className="w-full text-xs text-indigo-600 font-bold mt-2 hover:underline">이미 계정이 있습니다</button>
              </form>
            ) : authModal.mode === 'teacher_register' ? (
              <form onSubmit={handleTeacherSignUp} className="space-y-3">
                <div><label className="text-xs font-bold text-slate-500">교사 실명 (이름)</label><input type="text" value={signUpName} onChange={e=>setSignUpName(e.target.value)} className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="예: 홍길동" required/></div>
                <div><label className="text-xs font-bold text-slate-500">교사용 로그인 아이디 (ID)</label><input type="text" value={signUpId} onChange={e=>setSignUpId(e.target.value)} className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="예: math_teacher" required/></div>
                <div>
                  <label className="flex justify-between items-center text-xs font-bold text-slate-500 mb-1"><span>비밀번호</span><span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">최소 6자 이상</span></label>
                  <input type="password" value={signUpPw} onChange={e=>setSignUpPw(e.target.value)} minLength={6} className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none" required/>
                </div>
                <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-750 text-white font-bold rounded-xl mt-4 transition-all shadow-md">교사 가입 권한 신청하기</button>
                <button type="button" onClick={()=>setAuthModal({...authModal, mode:'teacher_login'})} className="w-full text-xs text-emerald-600 font-bold mt-2 hover:underline">기존 교사 로그인으로 돌아가기</button>
              </form>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div><label className="text-xs font-bold text-slate-500">아이디 (ID)</label><input type="text" value={loginIdInput} onChange={e=>setLoginIdInput(e.target.value)} className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none" required/></div>
                <div><label className="text-xs font-bold text-slate-500">비밀번호</label><input type="password" value={loginPwInput} onChange={e=>setLoginPwInput(e.target.value)} className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none" required/></div>
                
                <label className="flex items-center gap-2 cursor-pointer pt-1 w-fit">
                  <input type="checkbox" checked={keepLoggedIn} onChange={e=>setKeepLoggedIn(e.target.checked)} className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"/>
                  <span className="text-xs font-bold text-slate-600">자동 로그인 (로그아웃 전까지 유지)</span>
                </label>

                <button type="submit" className={`w-full py-3 text-white font-bold rounded-xl transition-all ${authModal.mode === 'teacher_login' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}>로그인</button>
                {authModal.mode === 'student_login' && <button type="button" onClick={()=>setAuthModal({...authModal, mode:'student_register'})} className="w-full text-xs text-indigo-600 font-bold mt-2 hover:underline">아직 회원이 아니신가요?</button>}
                {authModal.mode === 'teacher_login' && <button type="button" onClick={()=>setAuthModal({...authModal, mode:'teacher_register'})} className="w-full text-xs text-emerald-600 font-bold mt-2 hover:underline">아직 교사 등록이 안되어 있으신가요? (권한 신청)</button>}
              </form>
            )}
          </div>
        </div>
      )}

      {/* 5. 상세 피드백 및 답변/오답노트 확인용 Selected Question 모달 */}
      {selectedQuestion && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-5xl w-full h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-start">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                  {selectedQuestion.isChallenge && <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded shadow-sm font-bold flex items-center gap-1"><Trophy size={10}/> 공개 챌린지</span>}
                  {selectedQuestion.tags.map((t, i) => <span key={i} className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">#{t}</span>)}
                </div>
                <h3 className="font-extrabold text-xl text-slate-900">{selectedQuestion.title}</h3>
              </div>
              <button onClick={() => { setSelectedQuestion(null); setViewingSubmission(null); setStudentSolutionPreview(''); setFeedbackInputImagePreview(''); }} className="p-2 hover:bg-slate-200 rounded-full"><X size={20} className="text-slate-500" /></button>
            </div>
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              <div className="md:w-1/2 flex flex-col border-r border-slate-200 bg-slate-50/50 p-6 overflow-y-auto">
                <h4 className="text-xs font-extrabold text-slate-500 flex items-center gap-1 mb-3"><FileText size={14}/> 기출문제 세트</h4>
                <div className="relative group bg-white border border-slate-200 rounded-xl flex items-center justify-center h-[350px] mb-4">
                  <img src={selectedQuestion.imageUrls[qImageIdx]} alt={selectedQuestion.title} className="max-h-full max-w-full object-contain p-2 cursor-zoom-in" onClick={()=>openLightbox(selectedQuestion.imageUrls[qImageIdx], selectedQuestion.title + ' (' + (qImageIdx+1) + '장)')} />
                  {selectedQuestion.imageUrls.length > 1 && (
                    <>
                      <button onClick={(e) => { e.stopPropagation(); setQImageIdx(p => Math.max(0, p - 1)); }} disabled={qImageIdx === 0} className={`absolute left-2 p-2 rounded-full bg-slate-800/60 text-white hover:bg-slate-800 transition ${qImageIdx === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}><ArrowLeft size={20}/></button>
                      <button onClick={(e) => { e.stopPropagation(); setQImageIdx(p => Math.min(selectedQuestion.imageUrls.length - 1, p + 1)); }} disabled={qImageIdx === selectedQuestion.imageUrls.length - 1} className={`absolute right-2 p-2 rounded-full bg-slate-800/60 text-white hover:bg-slate-800 transition ${qImageIdx === selectedQuestion.imageUrls.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}><ArrowRight size={20}/></button>
                      <div className="absolute bottom-3 bg-slate-900/70 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm tracking-widest">{qImageIdx + 1} / {selectedQuestion.imageUrls.length}</div>
                    </>
                  )}
                </div>
                {selectedQuestion.isChallenge && currentUser?.role === 'student' && submissions.some(s => s.questionId === selectedQuestion.id && s.studentId === currentUser.id) && (
                  <div className="mt-auto border-t pt-5">
                    <h4 className="text-sm font-extrabold text-indigo-700 mb-3 flex items-center gap-1"><Users size={16}/> {selectedQuestion.isStudentQuestion ? '답변 갤러리' : '참가자 갤러리 (상호 피드백)'}</h4>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {submissions.filter(s => s.questionId === selectedQuestion.id && s.isShared && s.studentId !== currentUser.id).length === 0 ? (
                        <p className="text-xs text-slate-400 py-3 bg-white w-full text-center rounded-xl border border-dashed border-slate-200 font-semibold">아직 공개로 등록된 풀이/답변이 없습니다.</p>
                      ) : (
                        submissions.filter(s => s.questionId === selectedQuestion.id && s.isShared && s.studentId !== currentUser.id).map(peerSub => (
                          <button key={peerSub.id} onClick={() => setViewingSubmission(peerSub)} className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${currentViewingSubmission?.id === peerSub.id ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105' : 'bg-white text-slate-700 hover:border-indigo-400 shadow-sm'}`}>{peerSub.studentName} 학생</button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-6 overflow-y-auto bg-white flex flex-col">
                {currentUser?.role === 'teacher' ? (
                  currentViewingSubmission ? (
                    <div className="flex flex-col h-full">
                      {(() => {
                        const attempts = currentViewingSubmission.attempts || [{ imageUrl: currentViewingSubmission.imageUrl, feedbackText: currentViewingSubmission.feedbackText, feedbackImageUrl: currentViewingSubmission.feedbackImageUrl, submittedAt: currentViewingSubmission.submittedAt }];
                        const currentIdx = Math.min(selectedAttemptIdx, attempts.length - 1);
                        const currentAttempt = attempts[currentIdx] || {};
                        const isLatest = currentIdx === attempts.length - 1;
                        return (
                          <>
                            <button onClick={() => setViewingSubmission(null)} className="text-xs text-slate-500 hover:text-emerald-600 font-bold mb-3 flex items-center gap-1 w-fit transition-colors"><ArrowLeft size={14}/> 풀이 목록으로 돌아가기</button>
                            <div className="flex justify-between items-end mb-1"><h4 className="font-extrabold text-emerald-600 flex items-center gap-1 text-sm"><CheckCircle size={16}/> {currentViewingSubmission.studentName} 학생 풀이 첨삭</h4></div>
                            <div className="mb-4 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 flex items-center gap-1.5 w-fit"><span>📅</span> <span>제출 시간:</span> <span className="font-mono text-slate-800 font-bold bg-white px-2 py-0.5 rounded shadow-sm">{formatDateTime(currentAttempt.submittedAt || currentViewingSubmission.submittedAt)}</span></div>
                            {attempts.length > 1 && (
                              <div className="flex flex-wrap gap-2 pb-4 mb-4 border-b border-slate-100 items-center">
                                <span className="text-sm font-bold text-slate-500 flex items-center shrink-0 mr-1">풀이 회차:</span>
                                {attempts.map((_, idx) => (
                                  <button key={idx} onClick={() => { setSelectedAttemptIdx(idx); setFeedbackInputText(attempts[idx].feedbackText || ''); setFeedbackInputImagePreview(attempts[idx].feedbackImageUrl || ''); setFeedbackInputImage(null); }} className={`px-4 py-2 text-xs font-bold rounded-xl border transition-colors shadow-sm ${currentIdx === idx ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-emerald-300'}`}>{idx + 1}회차 {idx === attempts.length - 1 && '(최신)'}</button>
                                ))}
                              </div>
                            )}
                            <img src={currentAttempt.imageUrl} alt="학생 풀이" className="h-40 object-contain rounded-xl border mb-4 bg-slate-50 cursor-zoom-in" onClick={()=>openLightbox(currentAttempt.imageUrl, currentViewingSubmission.studentName + ' 학생 풀이 (' + (currentIdx+1) + '회차)')}/>
                            <div className="flex-1 space-y-4">
                              <div className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${feedbackInputImagePreview ? 'border-emerald-400 bg-emerald-50' : 'border-slate-300 hover:bg-slate-50'}`}>
                                {feedbackInputImagePreview ? (
                                  <div className="relative"><img src={feedbackInputImagePreview} alt="첨삭" className="max-h-24 mx-auto rounded"/><button onClick={(e)=>{e.stopPropagation(); setFeedbackInputImagePreview(''); setFeedbackInputImage(null);}} className="absolute top-0 right-0 bg-slate-800 text-white p-1 rounded-full shadow-md hover:bg-red-500"><X size={12}/></button></div>
                                ) : (
                                  <label className="cursor-pointer block"><Upload className="mx-auto text-slate-400 mb-1" size={20}/><span className="text-xs font-bold text-emerald-600">{isLatest ? '새로운 첨삭 이미지 업로드 (Ctrl+V)' : '이 회차 첨삭 덮어쓰기 (Ctrl+V)'}</span><input type="file" accept="image/*" onChange={e=>{const files=e.target.files; if(files&&files[0]){setFeedbackInputImage(files[0]); setFeedbackInputImagePreview(URL.createObjectURL(files[0]));}}} className="hidden"/></label>
                                )}
                              </div>
                              <textarea value={feedbackInputText} onChange={e=>setFeedbackInputText(e.target.value)} placeholder="격려와 코멘트를 남겨주세요." className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 text-sm h-24 outline-none focus:ring-2 focus:ring-emerald-500 resize-none"/>
                            </div>
                            <button onClick={handleSaveFeedbackSubmit} className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md mt-4 transition-colors">{isLatest ? '첨삭 저장 및 전송' : (currentIdx+1) + '회차 첨삭 수정하기'}</button>
                          </>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col">
                      <h4 className="font-extrabold text-emerald-600 mb-4 flex items-center gap-1 text-sm"><Users size={16}/> 제출된 학생 풀이 목록</h4>
                      {(() => {
                        const qSubs = submissions.filter(s => s.questionId === selectedQuestion.id);
                        if (qSubs.length === 0) return <div className="flex-1 flex flex-col justify-center items-center text-slate-400 font-semibold"><Users size={40} className="mb-4 opacity-30"/><p>아직 제출된 풀이가 없습니다.</p></div>;
                        return (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto pb-4">
                            {qSubs.map(sub => {
                              const attemptsCount = sub.attempts ? sub.attempts.length : 1;
                              return (
                                <div key={sub.id} onClick={() => { setViewingSubmission(sub); setActiveFeedbackSubmissionId(sub.id); const atts = sub.attempts || [{ feedbackText: sub.feedbackText, feedbackImageUrl: sub.feedbackImageUrl, submittedAt: sub.submittedAt }]; const latestAtt = atts[atts.length - 1]; setFeedbackInputText(latestAtt.feedbackText||''); setFeedbackInputImagePreview(latestAtt.feedbackImageUrl||''); setSelectedAttemptIdx(atts.length - 1); }} className="bg-slate-50 border border-slate-200 rounded-xl p-3 cursor-pointer hover:border-emerald-400 hover:shadow-md transition-all group flex flex-col">
                                  <div className="relative h-24 mb-2 rounded bg-white border border-slate-200 overflow-hidden shrink-0"><img src={sub.imageUrl} alt="풀이" className="w-full h-full object-cover group-hover:scale-105 transition-transform" /><span className={`absolute top-1 right-1 px-1.5 py-0.5 rounded text-[8px] font-bold shadow-sm ${sub.status==='피드백 완료'?'bg-emerald-500 text-white':'bg-amber-400 text-white'}`}>{sub.status}</span></div>
                                  <div className="flex justify-between items-center mt-auto"><span className="font-bold text-sm text-slate-800 truncate">{sub.studentName}</span><span className="text-[10px] font-bold text-slate-400 bg-slate-200 px-1.5 py-0.5 rounded">{attemptsCount}회</span></div>
                                </div>
                              )
                            })}
                          </div>
                        )
                      })()}
                    </div>
                  )
                ) : (currentUser?.role === 'student' && submissions.some(s => s.questionId === selectedQuestion.id && s.studentId === currentUser.id)) ? (
                  <div className="flex flex-col h-full">
                    {(() => {
                      const targetSub = currentViewingSubmission || submissions.filter(s => s.questionId === selectedQuestion.id && s.studentId === currentUser.id).pop() || {};
                      const isMy = targetSub.studentId === currentUser.id;
                      const attempts = targetSub.attempts || [{ imageUrl: targetSub.imageUrl, feedbackText: targetSub.feedbackText, feedbackImageUrl: targetSub.feedbackImageUrl, submittedAt: targetSub.submittedAt }];
                      const currentIdx = Math.min(selectedAttemptIdx, attempts.length - 1);
                      const currentAttempt = attempts[currentIdx] || {};
                      const isLatest = currentIdx === attempts.length - 1;
                      const hasFeed = !!currentAttempt.feedbackText || !!currentAttempt.feedbackImageUrl;
                      return (
                        <div className="flex flex-col h-full space-y-4">
                          <div className={`p-4 rounded-2xl flex justify-between items-center ${isMy ? 'bg-indigo-50 border border-indigo-100' : 'bg-slate-50 border border-slate-200'}`}>
                            <span className="font-extrabold text-sm flex items-center gap-2">{isMy ? <><User size={16} className="text-indigo-600"/> {selectedQuestion.isStudentQuestion ? '내 답변 기록' : '내 오답 노트'}</> : <><Users size={16} className="text-slate-600"/> {targetSub.studentName} 학생의 풀이</>}</span>
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${hasFeed ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{hasFeed ? '피드백 완료' : '피드백 대기'}</span>
                          </div>
                          <div className="bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 flex items-center gap-1.5 w-fit shrink-0"><span>📅</span> <span>제출 시간:</span> <span className="font-mono text-slate-800 font-bold bg-white px-2 py-0.5 rounded shadow-sm">{formatDateTime(currentAttempt.submittedAt || targetSub.submittedAt)}</span></div>
                          {attempts.length > 1 && (
                            <div className="flex flex-wrap gap-2 pb-4 mb-2 border-b border-slate-100 shrink-0 items-center">
                              <span className="text-sm font-bold text-slate-500 flex items-center shrink-0 mr-1">이전 기록:</span>
                              {attempts.map((_, idx) => (
                                <button key={idx} onClick={() => { setSelectedAttemptIdx(idx); setIsEditingSolution(false); }} className={`px-4 py-2 text-xs font-bold rounded-xl border transition-colors shadow-sm ${currentIdx === idx ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-indigo-300'}`}>{idx + 1}회차 {idx === attempts.length - 1 && '(최신)'}</button>
                              ))}
                            </div>
                          )}
                          <div className="grid grid-cols-2 gap-3 shrink-0">
                            <div className="border rounded-xl bg-slate-50 text-center relative overflow-hidden group cursor-zoom-in" onClick={()=>openLightbox(currentAttempt.imageUrl, '풀이 이미지 (' + (currentIdx+1) + '회차)')}><div className="absolute top-0 w-full bg-black/60 text-white text-[9px] font-bold py-1 z-10">제출본 ({(currentIdx+1)}회차)</div><img src={currentAttempt.imageUrl} className="h-32 w-full object-cover group-hover:scale-105 transition-transform" alt="풀이"/></div>
                            <div className="border rounded-xl bg-red-50/30 text-center relative overflow-hidden group cursor-zoom-in" onClick={()=>hasFeed && currentAttempt.feedbackImageUrl && openLightbox(currentAttempt.feedbackImageUrl, '교사 첨삭 (' + (currentIdx+1) + '회차)')}><div className="absolute top-0 w-full bg-red-600/80 text-white text-[9px] font-bold py-1 z-10">선생님 첨삭</div>{currentAttempt.feedbackImageUrl ? <img src={currentAttempt.feedbackImageUrl} className="h-32 w-full object-cover group-hover:scale-105 transition-transform" alt="첨삭"/> : <div className="h-32 flex items-center justify-center text-[10px] text-slate-400 font-bold">{hasFeed ? '이미지 첨삭 없음' : '대기 중 ⏳'}</div>}</div>
                          </div>
                          {hasFeed && currentAttempt.feedbackText && (
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shrink-0"><span className="text-[10px] font-extrabold text-indigo-700 flex items-center gap-1 mb-1.5"><Sparkles size={12}/> 선생님 코멘트</span><p className="text-xs font-semibold leading-relaxed text-slate-700">{currentAttempt.feedbackText}</p></div>
                          )}
                          {isMy && isLatest && !isEditingSolution && <button onClick={() => setIsEditingSolution(true)} className="w-full py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-xl border border-indigo-200 transition-colors shrink-0">✏️ 다시 풀어서 제출하기 (이전 기록 보존)</button>}
                          {isEditingSolution && (
                            <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl shrink-0 animate-fade-in">
                              <div className="flex justify-between items-center mb-3"><h4 className="font-extrabold text-sm text-indigo-950">추가 풀이 업로드 ({attempts.length + 1}회차)</h4><button onClick={() => { setIsEditingSolution(false); setStudentSolutionPreview(''); setStudentSolutionImage(null); }} className="text-slate-400 hover:text-slate-600 bg-white p-1 rounded-full shadow-sm"><X size={14}/></button></div>
                              <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-start gap-2 mb-3"><span className="bg-amber-100 p-1.5 rounded-full shrink-0"><Sparkles size={12} className="text-amber-600" /></span><div><h5 className="font-bold text-amber-900 text-[11px] mb-0.5">선생님의 당부 ✍️</h5><p className="text-[10px] text-amber-800 font-medium leading-tight">눈으로만 보지 말고, 백지에 정성껏 다시 푼 새로운 풀이 과정을 사진으로 찍어 올려주세요!</p></div></div>
                              <div className="border-2 border-dashed border-indigo-200 rounded-xl p-4 text-center bg-white mb-3 cursor-pointer">
                                {studentSolutionPreview ? (
                                  <div className="relative"><img src={studentSolutionPreview} alt="새 풀이" className="max-h-24 mx-auto rounded-lg border shadow-sm"/><button onClick={(e)=>{e.stopPropagation(); setStudentSolutionImage(null); setStudentSolutionPreview('');}} className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-md hover:bg-red-600"><X size={12}/></button></div>
                                ) : (
                                  <label className="cursor-pointer block"><Upload className="mx-auto text-indigo-400 mb-2" size={24}/><span className="text-xs font-bold text-indigo-600 block">새로 푼 사진 첨부 (Ctrl+V)</span><input type="file" accept="image/*" onChange={e=>{const files=e.target.files; if(files&&files[0]){setStudentSolutionImage(files[0]); setStudentSolutionPreview(URL.createObjectURL(files[0]));}}} className="hidden"/></label>
                                )}
                              </div>
                              <button onClick={handleSubmitSolution} disabled={!studentSolutionPreview} className="w-full py-2.5 bg-indigo-600 disabled:bg-slate-300 text-white font-bold rounded-xl shadow-sm transition-colors text-xs">추가 회차 최종 제출</button>
                            </div>
                          )}
                          
                          {selectedQuestion.isChallenge && !isMy && (
                            <div className="flex-1 flex flex-col border border-indigo-100 rounded-2xl overflow-hidden bg-white shadow-md mt-4 min-h-[320px]">
                              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100/50 px-4 py-3 text-xs font-black text-indigo-900 flex items-center justify-between border-b border-indigo-100 shrink-0">
                                <span className="flex items-center gap-1.5">
                                  <MessageSquare size={16} className="text-indigo-600 animate-pulse" /> 
                                  <span>{selectedQuestion.isStudentQuestion ? '🙋 답변 및 풀이 피드백' : '💬 친구들과 함께 나누는 피드백 공간'}</span>
                                </span>
                                <span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black">
                                  댓글 {targetSub.peerComments?.length || 0}
                                </span>
                              </div>
                              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/30 max-h-[380px] min-h-[180px]">
                                {targetSub.peerComments && targetSub.peerComments.length > 0 ? (
                                  targetSub.peerComments.map((c) => (
                                    <div key={c.id} className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm text-xs font-medium text-slate-700 hover:border-indigo-200 transition-colors">
                                      <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-slate-50">
                                        <div className="flex items-center gap-2">
                                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                                            {c.authorName[0]}
                                          </div>
                                          <span className="font-extrabold text-slate-900 flex items-center gap-1">
                                            {c.authorName}
                                            {c.authorName === currentUser?.name && (
                                              <span className="text-[8px] bg-indigo-100 text-indigo-700 px-1.5 py-0.2 rounded-md font-black">나</span>
                                            )}
                                          </span>
                                        </div>
                                        <span className="text-[9px] text-slate-400 font-mono font-semibold">{formatDateTime(c.createdAt)}</span>
                                      </div>
                                      {c.imageUrl && (
                                        <div className="my-2 rounded-xl overflow-hidden border border-slate-200 max-w-xs bg-slate-100 cursor-zoom-in shadow-sm hover:shadow-md transition-shadow">
                                          <img src={c.imageUrl} alt="첨부" className="max-h-48 w-auto object-contain mx-auto" onClick={(e) => { e.stopPropagation(); openLightbox(c.imageUrl, `${c.authorName}님의 피드백 첨부 이미지`); }} />
                                        </div>
                                      )}
                                      <p className="text-slate-700 font-semibold leading-relaxed whitespace-pre-wrap pl-1">{c.text}</p>
                                    </div>
                                  ))
                                ) : (
                                  <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                                    <MessageCircle size={36} className="opacity-30 mb-2.5 text-indigo-300" />
                                    <p className="text-xs font-extrabold text-slate-500">작성된 피드백이 아직 없습니다.</p>
                                    <p className="text-[10px] text-slate-400 mt-1">이 풀이에 대한 나만의 힌트나 격려의 한마디를 첫 번째로 남겨보세요!</p>
                                  </div>
                                )}
                              </div>
                              <form onSubmit={(e)=>handlePeerCommentSubmit(e, targetSub.id)} className="p-3 border-t border-indigo-50 bg-slate-50/50 flex flex-col gap-2.5 shrink-0">
                                {peerCommentImagePreview && (
                                  <div className="relative w-fit border rounded-xl overflow-hidden shadow-md bg-white p-1">
                                    <img src={peerCommentImagePreview} alt="첨부 미리보기" className="h-20 rounded-lg object-cover"/>
                                    <button type="button" onClick={()=>{setPeerCommentImage(null); setPeerCommentImagePreview('');}} className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 transition-colors">
                                      <X size={10}/>
                                    </button>
                                  </div>
                                )}
                                <div className="flex gap-2 items-center">
                                  <label className="cursor-pointer text-slate-400 hover:text-indigo-600 shrink-0 p-1 hover:bg-indigo-50 rounded-lg transition-colors" title="이미지 피드백 첨부">
                                    <ImageIcon size={22} className="text-indigo-500" />
                                    <input type="file" accept="image/*" onChange={e=>{const f=e.target.files; if(f&&f[0]){setPeerCommentImage(f[0]); setPeerCommentImagePreview(URL.createObjectURL(f[0]));}}} className="hidden"/>
                                  </label>
                                  <input 
                                    type="text" 
                                    value={peerCommentInput} 
                                    onChange={e=>setPeerCommentInput(e.target.value)} 
                                    className="flex-1 px-3 py-2.5 text-xs bg-white border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 font-semibold" 
                                    placeholder="따뜻한 피드백이나 풀이 의견을 입력해주세요..." 
                                  />
                                  <button 
                                    type="submit" 
                                    disabled={!peerCommentInput.trim() && !peerCommentImage} 
                                    className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white px-4 py-2.5 rounded-xl text-xs font-black shrink-0 shadow-sm transition-colors"
                                  >
                                    피드백 등록
                                  </button>
                                </div>
                              </form>
                            </div>
                          )}
                          {!isMy && <button onClick={()=>setViewingSubmission(null)} className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl mt-auto shadow-md shrink-0">목록으로 돌아가기</button>}
                        </div>
                      );
                    })()}
                  </div>
                ) : (currentUser?.role === 'student') && (
                  <div className="flex flex-col justify-center h-full space-y-6">
                    <div className="text-center"><h4 className="font-extrabold text-lg text-slate-900">{selectedQuestion.isStudentQuestion ? '이 질문에 답변해 줄 수 있나요?' : '도전할 준비가 되었나요?'}</h4><p className="text-xs text-slate-500 mt-1">{selectedQuestion.isStudentQuestion ? '답변 과정을 사진으로 찍어 업로드해주세요.' : '풀이 과정을 사진으로 찍어 업로드해주세요.'}</p></div>
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3"><div className="bg-amber-100 p-2 rounded-full shrink-0"><Sparkles size={16} className="text-amber-600" /></div><div><h5 className="font-bold text-amber-900 text-sm mb-1">선생님의 당부 ✍️</h5><p className="text-xs text-amber-800 font-medium leading-relaxed">왜 이미지로만 제출해야 할까요? 눈으로만 읽는 것보다 <b>직접 손으로 쓰며 고민하는 과정</b>에서 진짜 실력이 자라기 때문입니다. 백지에 정성껏 푼 나만의 풀이를 사진으로 찍어 올려주세요!</p></div></div>
                    <div className="border-2 border-dashed border-indigo-200 rounded-3xl p-6 text-center bg-indigo-50/30">
                      {studentSolutionPreview ? (
                        <div className="relative"><img src={studentSolutionPreview} alt="풀이 이미지" className="max-h-[200px] mx-auto rounded-xl border shadow-sm"/><button onClick={()=>{setStudentSolutionImage(null); setStudentSolutionPreview('');}} className="absolute -top-3 -right-3 bg-red-500 text-white p-1.5 rounded-full shadow-lg"><X size={14}/></button></div>
                      ) : (
                        <label className="cursor-pointer block py-8"><Upload className="mx-auto text-indigo-500 mb-3" size={32}/><span className="text-sm font-extrabold text-indigo-700 block">{selectedQuestion.isStudentQuestion ? '답변 사진(캡처) 첨부하기' : '풀이 사진(캡처) 첨부하기'}</span><span className="text-[10px] text-slate-400 mt-1 block"><b>Ctrl+V</b> 붙여넣기 지원</span><input type="file" accept="image/*" onChange={e=>{const files=e.target.files; if(files&&files[0]){setStudentSolutionImage(files[0]); setStudentSolutionPreview(URL.createObjectURL(files[0]));}}} className="hidden"/></label>
                      )}
                    </div>
                    {selectedQuestion.isChallenge && (
                      <label className="flex items-start gap-3 bg-indigo-50 p-4 rounded-xl border border-indigo-100 cursor-pointer"><input type="checkbox" checked={isSharedChecked} onChange={e=>setIsSharedChecked(e.checked)} className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"/><div className="flex flex-col"><span className="text-sm font-extrabold text-indigo-900">{selectedQuestion.isStudentQuestion ? '내 답변을 다른 친구들에게 공유합니다.' : '내 풀이를 챌린지 갤러리에 공유합니다.'}</span><span className="text-[10px] font-semibold text-indigo-600 mt-1">체크 시, 제출 후 다른 참가자들의 풀이를 열람하고 피드백할 수 있습니다.</span></div></label>
                    )}
                    <button onClick={handleSubmitSolution} disabled={!studentSolutionPreview} className="w-full py-4 bg-indigo-600 disabled:bg-slate-300 text-white rounded-2xl font-black text-sm shadow-xl shadow-indigo-200 transition-all active:scale-[0.98]">{selectedQuestion.isStudentQuestion ? '답변 최종 제출하기' : '풀이 최종 제출하기'}</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. 문제 세트 수정용 모달 */}
      {editQuestionModal && editingQuestion && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-[70] overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl animate-in zoom-in-95 my-8">
            <div className="flex justify-between items-center mb-5 border-b pb-3">
              <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                <Edit className="text-indigo-600" size={20}/>
                <span>문제 세트 수정</span>
                {editingQuestion.isStudentQuestion && <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-black">학생 질문</span>}
              </h3>
              <button onClick={() => { setEditQuestionModal(false); setEditingQuestion(null); }} className="text-slate-400 hover:bg-slate-100 p-1.5 rounded-full"><X size={18}/></button>
            </div>

            <form onSubmit={handleUpdateQuestionSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">문제 타이틀</label>
                <input 
                  type="text" 
                  value={editingQuestion.title} 
                  onChange={e => setEditingQuestion({...editingQuestion, title: e.target.value})} 
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none" 
                  placeholder="예: 수능 기출 22번" 
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">해시태그 (Space / Enter)</label>
                <div className="flex flex-wrap gap-2 p-2 border border-slate-300 bg-white rounded-xl focus-within:ring-2 focus-within:ring-indigo-500">
                  {editingQuestion.tags.map((tag) => (
                    <span key={tag} className="bg-indigo-100 text-indigo-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      #{tag} 
                      <button type="button" onClick={() => setEditingQuestion({...editingQuestion, tags: editingQuestion.tags.filter(t => t !== tag)})}>✕</button>
                    </span>
                  ))}
                  <input 
                    type="text" 
                    value={editingQuestion.currentTagInput} 
                    onChange={e => setEditingQuestion({...editingQuestion, currentTagInput: e.target.value})} 
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault(); 
                        const val = editingQuestion.currentTagInput.trim().replace(/^#/, '');
                        if (val && !editingQuestion.tags.includes(val)) {
                          setEditingQuestion({
                            ...editingQuestion, 
                            tags: [...editingQuestion.tags, val], 
                            currentTagInput: ''
                          });
                        }
                      }
                    }} 
                    className="flex-1 outline-none text-xs min-w-[100px] bg-transparent text-slate-900 placeholder-slate-400" 
                    placeholder="태그 추가..." 
                  />
                </div>
              </div>

              <div className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={editingQuestion.isPinned} 
                    onChange={e => setEditingQuestion({...editingQuestion, isPinned: e.target.checked})} 
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  /> 
                  <span className="text-xs font-bold text-slate-700">상단 고정 (공지)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={editingQuestion.isChallenge} 
                    onChange={e => setEditingQuestion({...editingQuestion, isChallenge: e.target.checked})} 
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  /> 
                  <span className="text-xs font-bold text-slate-700">공개 챌린지</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">이미지 목록 (제거하거나 새로 추가 가능)</label>
                <div 
                  onDragOver={e => e.preventDefault()} 
                  onDrop={(e) => {
                    e.preventDefault(); 
                    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
                    if (files.length > 0) {
                      setEditingQuestion(prev => ({
                        ...prev,
                        items: [...prev.items, ...files.map(file => ({ url: URL.createObjectURL(file), file }))]
                      }));
                    }
                  }} 
                  className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center bg-slate-50/50"
                >
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {editingQuestion.items.map((item, idx) => (
                      <div key={idx} className="relative group border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                        <img src={item.url} alt="미리보기" className="h-16 w-full object-cover cursor-zoom-in" onClick={() => openLightbox(item.url, '수정 미리보기')}/>
                        <button 
                          type="button" 
                          onClick={() => setEditingQuestion({
                            ...editingQuestion,
                            items: editingQuestion.items.filter((_, i) => i !== idx)
                          })} 
                          className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white p-0.5 rounded-full"
                        >
                          <X size={10}/>
                        </button>
                      </div>
                    ))}
                    
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-200 hover:border-indigo-400 rounded-lg hover:bg-indigo-50 cursor-pointer h-16 transition-colors">
                      <Plus size={16} className="text-indigo-500" />
                      <span className="text-[9px] font-bold text-indigo-600">추가</span>
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={(e) => {
                          const files = e.target.files ? Array.from(e.target.files) : [];
                          if (files.length > 0) {
                            setEditingQuestion(prev => ({
                              ...prev,
                              items: [...prev.items, ...files.map(file => ({ url: URL.createObjectURL(file), file }))]
                            }));
                          }
                        }} 
                        className="hidden" 
                      />
                    </label>
                  </div>
                  <span className="text-[10px] text-slate-400 block font-semibold">순서 변경은 제거 후 재등록하거나, 추가 등록으로 제어해 주세요!</span>
                </div>
              </div>

              <div className="flex gap-2.5 pt-3">
                <button type="button" onClick={() => { setEditQuestionModal(false); setEditingQuestion(null); }} className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors">취소</button>
                <button type="submit" className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs transition-colors shadow-md shadow-indigo-100">수정 완료</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 7. 전역 확인(Confirm) 모달 마크업 */}
      {confirmModal.show && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl animate-in zoom-in-95">
            <div className="text-center mb-5">
              <div className={`p-3.5 rounded-full w-fit mx-auto mb-3 ${confirmModal.isDanger ? 'bg-red-50 text-red-600' : 'bg-indigo-50 text-indigo-600'}`}>
                {confirmModal.isDanger ? <AlertCircle size={28} /> : <CheckCircle size={28} />}
              </div>
              <h3 className="font-extrabold text-lg text-slate-900">{confirmModal.title}</h3>
              <p className="text-xs text-slate-500 mt-2 whitespace-pre-wrap">{confirmModal.message}</p>
            </div>
            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => setConfirmModal({ show: false, title: '', message: '', onConfirm: null, isDanger: false })}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  if (confirmModal.onConfirm) confirmModal.onConfirm();
                }}
                className={`flex-1 py-3 text-white rounded-xl font-bold text-xs transition-colors shadow-md ${
                  confirmModal.isDanger ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. 라이트박스 모달 */}
      {lightbox.show && (
        <div onClick={() => setLightbox({ show: false, imageUrl: '', title: '' })} className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 z-[110] cursor-zoom-out">
          <button className="absolute top-5 right-5 text-white bg-slate-800 px-3 py-1.5 rounded-full font-bold text-xs">✕ 닫기</button>
          <img src={lightbox.imageUrl} alt="확대" className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl border-4 border-slate-800/50" />
          <div className="mt-4 text-center"><p className="text-white font-extrabold text-base">{lightbox.title}</p></div>
        </div>
      )}

      {/* 9. 메인 네비게이션 헤더 */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white"><BookOpen size={24} /></div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">문제 풀이 아카이브</h1>
              <p className="text-xs text-slate-500 hidden sm:block">지식을 나누고 실력을 키우는 클라우드 교실</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleInstallApp} className="text-slate-500 hover:text-indigo-600 flex items-center gap-1 text-xs font-bold bg-slate-100 px-3 py-2 rounded-xl transition-colors shadow-sm">
              <Download size={14} /> <span className="hidden sm:inline">앱 설치</span>
            </button>
            
            {!currentUser ? (
              <div className="flex items-center gap-2">
                <button onClick={() => setAuthModal({ show: true, mode: 'student_login' })} className="px-3 py-2 sm:px-4 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1 hover:bg-indigo-700">
                  <LogIn size={13} /> <span className="hidden sm:inline">학생 로그인/가입</span><span className="sm:hidden">학생</span>
                </button>
                <button onClick={() => setAuthModal({ show: true, mode: 'teacher_login' })} className="px-3 py-2 sm:px-4 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1 hover:bg-emerald-700">
                  <User size={13} /> <span className="hidden sm:inline">교사 로그인</span><span className="sm:hidden">교사</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                  <span className={`w-2.5 h-2.5 rounded-full ${currentUser.role === 'teacher' ? 'bg-emerald-500' : 'bg-indigo-500'}`}></span>
                  <span className="text-xs font-bold text-slate-700">{currentUser.name} {currentUser.id === 'teacher_admin' ? '최고 관리자' : currentUser.role === 'teacher' ? '선생님' : '학생'}</span>
                </div>
                <button onClick={handleLogout} className="text-slate-500 hover:text-red-600 flex items-center gap-1 text-xs font-bold"><LogOut size={14} /> 로그아웃</button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 10. 메인 컨텐츠 영역 */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {currentUser?.role === 'teacher' ? (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white border border-slate-200 p-2 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex gap-2">
                <button onClick={() => setTeacherSubTab('content')} className={`px-5 py-2.5 rounded-xl text-sm font-extrabold flex items-center gap-2 transition-all ${teacherSubTab === 'content' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <FileText size={18} /> 기출 및 제출 관리
                </button>
                <button onClick={() => setTeacherSubTab('members')} className={`px-5 py-2.5 rounded-xl text-sm font-extrabold flex items-center gap-2 transition-all ${teacherSubTab === 'members' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Users size={18} /> 회원 관리 <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">{students.length}</span>
                </button>
              </div>
            </div>

            {teacherSubTab === 'content' && rankingData.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
                <h3 className="font-extrabold text-lg text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="text-amber-500" size={24}/> 이달의 열공 랭킹 🏆
                </h3>
                <div className="flex gap-4 overflow-x-auto pb-4 pt-4 px-2 scrollbar-thin">
                  {rankingData.map((student, idx) => (
                    <div key={student.id} className="min-w-[155px] flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-xl relative hover:border-amber-300 transition-colors">
                      {idx === 0 && <span className="absolute -top-2 bg-amber-400 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">1위 🥇</span>}
                      {idx === 1 && <span className="absolute -top-2 bg-slate-300 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">2위 🥈</span>}
                      {idx === 2 && <span className="absolute -top-2 bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">3위 🥉</span>}
                      {idx > 2 && <span className="absolute -top-2 bg-slate-200 text-slate-600 text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">{idx + 1}위</span>}
                      
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2 mt-1 shadow-inner">
                        <span className="text-lg font-bold text-indigo-600">{anonymizeName(student.name)[0]}</span>
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{anonymizeName(student.name)}</span>
                      <span className="text-xs font-black text-indigo-600 mt-1">{student.totalScore}점</span>
                      <div className="flex gap-2 mt-2 text-[9px] text-slate-400 font-semibold text-center w-full justify-center border-t pt-2">
                        <span>제출 {student.mySubmissionsCount}</span>
                        <span>질문 {student.myQuestionsCount}</span>
                        <span>피드백 {student.myCommentsCount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {teacherSubTab === 'content' ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-fit">
                  <h3 className="font-bold text-lg text-slate-900 mb-5 flex items-center gap-2 border-b pb-3"><Upload className="text-emerald-600"/> 문제 세트 등록</h3>
                  <form onSubmit={handleAddQuestion} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">문제 타이틀</label>
                      <input type="text" value={newQuestion.title} onChange={e => setNewQuestion({...newQuestion, title: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="예: 2024 수능 22번" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">해시태그 (입력 후 Space/Enter)</label>
                      <div className="flex flex-wrap gap-2 p-2 border border-slate-300 bg-white rounded-lg focus-within:ring-2 focus-within:ring-emerald-500">
                        {newQuestion.tags.map((tag) => (
                          <span key={tag} className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">#{tag} <button type="button" onClick={()=>removeTag(tag)}>✕</button></span>
                        ))}
                        <input type="text" value={newQuestion.currentTagInput} onChange={e => setNewQuestion({...newQuestion, currentTagInput: e.target.value})} onKeyDown={handleTagKeyDown} className="flex-1 outline-none text-sm min-w-[100px] bg-transparent text-slate-900 placeholder-slate-400" placeholder="태그 추가..." />
                      </div>
                    </div>
                    <div className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <label className="flex items-center gap-2"><input type="checkbox" checked={newQuestion.isPinned} onChange={e => setNewQuestion({...newQuestion, isPinned: e.target.checked})} className="rounded text-emerald-600"/> <span className="text-xs font-bold">상단 고정 (공지)</span></label>
                      <label className="flex items-center gap-2"><input type="checkbox" checked={newQuestion.isChallenge} onChange={e => setNewQuestion({...newQuestion, isChallenge: e.target.checked})} className="rounded text-indigo-600"/> <span className="text-xs font-bold">공개 챌린지</span></label>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">다중 이미지 업로드 (Ctrl+V / 드래그)</label>
                      <div onDragOver={e=>e.preventDefault()} onDrop={handleDropQuestion} className="border-2 border-dashed rounded-xl p-4 text-center">
                        {newQuestion.imagePreviews.length > 0 ? (
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            {newQuestion.imagePreviews.map((preview, idx) => (
                              <div key={idx} className="relative group border rounded">
                                <img src={preview} alt="미리보기" className="h-20 w-full object-cover rounded cursor-zoom-in" onClick={()=>openLightbox(preview, '미리보기')}/>
                                <button type="button" onClick={()=>removeQuestionPreview(idx)} className="absolute -top-1 -right-1 bg-red-500 text-white p-0.5 rounded-full opacity-0 group-hover:opacity-100"><X size={12}/></button>
                              </div>
                            ))}
                            <label className="flex flex-col items-center justify-center border-2 border-dashed border-emerald-300 rounded hover:bg-emerald-50 cursor-pointer min-h-[5rem]">
                              <Plus size={20} className="text-emerald-500" /> <span className="text-[10px] font-bold text-emerald-600">추가</span>
                              <input type="file" multiple accept="image/*" onChange={handleQuestionImageChange} className="hidden" />
                            </label>
                          </div>
                        ) : (
                          <label className="cursor-pointer block py-4">
                            <ImageIcon className="mx-auto text-slate-400 mb-2" size={24}/> <span className="text-xs font-bold text-emerald-600">클릭 또는 이미지 붙여넣기</span>
                            <input type="file" multiple accept="image/*" onChange={handleQuestionImageChange} className="hidden" />
                          </label>
                        )}
                      </div>
                    </div>
                    <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2"><Plus size={16}/> 등록하기</button>
                  </form>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg text-slate-900">등록된 아카이브 문제</h3>
                      <div className="relative max-w-[180px] w-full">
                        <Search className="absolute left-2.5 top-2 text-slate-400" size={14}/>
                        <input type="text" value={teacherQuestionSearch} onChange={e => setTeacherQuestionSearch(e.target.value)} placeholder="제목, #태그 검색" className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500" />
                      </div>
                    </div>
                    <div className="divide-y divide-slate-100 max-h-[200px] overflow-y-auto pr-1">
                      {filteredTeacherQuestions.length === 0 ? (
                        <div className="text-center py-8 text-slate-400 text-xs font-bold">검색 결과가 없습니다.</div>
                      ) : (
                        filteredTeacherQuestions.map(q => (
                          <div key={q.id} className="py-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img src={q.imageUrls[0]} alt="썸네일" className="w-10 h-10 object-cover rounded border cursor-zoom-in" onClick={()=>{ setSelectedQuestion(q); setViewingSubmission(null); }}/>
                              <div>
                                <div className="flex gap-1 mb-0.5">
                                  {q.isPinned && <span className="text-[8px] bg-amber-100 text-amber-700 px-1 rounded font-bold">고정</span>}
                                  {q.isChallenge && <span className="text-[8px] bg-indigo-100 text-indigo-700 px-1 rounded font-bold">챌린지</span>}
                                  {q.tags.includes('질문있어요') && <span className="text-[8px] bg-amber-500 text-white px-1 rounded font-bold flex items-center gap-0.5"><MessageCircle size={8}/>질문</span>}
                                  {q.imageUrls.length > 1 && <span className="text-[8px] bg-slate-100 text-slate-600 px-1 rounded font-bold border">{q.imageUrls.length}장</span>}
                                </div>
                                <h4 className="text-xs font-bold text-slate-900 cursor-pointer hover:underline" onClick={()=>{ setSelectedQuestion(q); setViewingSubmission(null); }}>{q.title}</h4>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1.5">
                              <button onClick={() => openEditQuestionModal(q)} className="p-1.5 text-slate-400 hover:text-indigo-600 transition-colors" title="수정하기">
                                <Edit size={16}/>
                              </button>
                              <button onClick={()=>handleDeleteQuestionConfirm(q.id)} className="p-1.5 text-slate-400 hover:text-red-600 transition-colors" title="삭제하기">
                                <Trash2 size={16}/>
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg text-slate-900">🎓 학생 풀이 현황판</h3>
                      <input type="text" value={submissionSearch} onChange={e=>setSubmissionSearch(e.target.value)} placeholder="학생명, 상태 검색" className="px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none" />
                    </div>
                    <div className="overflow-x-auto border rounded-xl">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 border-b text-slate-500">
                          <tr>
                            <th className="p-3">학생</th>
                            <th className="p-3">문제</th>
                            <th className="p-3 text-center">회차</th>
                            <th className="p-3 text-center">제출 일시</th>
                            <th className="p-3 text-center">상태</th>
                            <th className="p-3 text-center">코칭</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y text-slate-700">
                          {filteredSubmissions.map(sub => {
                            const relatedQ = questions.find(q => q.id === sub.questionId) || {};
                            const attemptsCount = sub.attempts ? sub.attempts.length : 1;
                            return (
                              <tr key={sub.id} className="hover:bg-slate-50">
                                <td className="p-3 font-bold">{sub.studentName}</td>
                                <td className="p-3 truncate max-w-[150px]">{relatedQ.title || '삭제된 문제'}</td>
                                <td className="p-3 text-center text-[10px] font-bold text-slate-400">{attemptsCount}회</td>
                                <td className="p-3 text-center font-mono text-slate-500 text-[11px]">{formatDateTime(sub.submittedAt)}</td>
                                <td className="p-3 text-center"><span className={`px-2 py-0.5 rounded text-[9px] font-bold ${sub.status==='피드백 완료'?'bg-emerald-50 text-emerald-700':'bg-amber-50 text-amber-700'}`}>{sub.status}</span></td>
                                <td className="p-3 text-center">
                                  <button onClick={()=>{ 
                                    setViewingSubmission(sub); setSelectedQuestion(relatedQ); setActiveFeedbackSubmissionId(sub.id); 
                                    const atts = sub.attempts || [{ feedbackText: sub.feedbackText, feedbackImageUrl: sub.feedbackImageUrl, submittedAt: sub.submittedAt }];
                                    const latestAtt = atts[atts.length - 1];
                                    setFeedbackInputText(latestAtt.feedbackText||''); setFeedbackInputImagePreview(latestAtt.feedbackImageUrl||''); 
                                    setSelectedAttemptIdx(atts.length - 1);
                                  }} className="px-2 py-1 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded text-[10px] font-bold transition-colors">상세 첨삭</button>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6 animate-fade-in">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-5 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <UserPlus className="text-emerald-600" size={20} />
                      <h3 className="font-bold text-lg text-slate-900">학생 등록</h3>
                    </div>
                    <button onClick={handleSaveDraftStudents} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-md text-sm transition-all">일괄 등록 완료</button>
                  </div>
                  <div className="overflow-x-auto border border-slate-200 rounded-xl bg-slate-50">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-100 text-slate-600">
                          <th className="p-3 border-r border-slate-200 w-12 text-center font-bold">No</th>
                          <th className="p-3 border-r border-slate-200 font-bold">학번 (예: 30101)</th>
                          <th className="p-3 border-r border-slate-200 font-bold">실명 (이름)</th>
                          <th className="p-3 border-r border-slate-200 font-bold">아이디 (ID)</th>
                          <th className="p-3 w-12 text-center font-bold">삭제</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {draftStudents.map((row, index) => (
                          <tr key={row.rowId} className="focus-within:bg-emerald-50/50 transition-colors">
                            <td className="p-2 border-r border-slate-200 text-center text-slate-400 font-bold bg-slate-50">{index + 1}</td>
                            <td className="p-0 border-r border-slate-200"><input type="text" value={row.no} onChange={(e) => handleDraftChange(row.rowId, 'no', e.target.value)} className="w-full p-3 outline-none bg-white text-slate-900 placeholder-slate-300 focus:ring-2 focus:ring-emerald-500" placeholder="학번 입력" /></td>
                            <td className="p-0 border-r border-slate-200"><input type="text" value={row.name} onChange={(e) => handleDraftChange(row.rowId, 'name', e.target.value)} className="w-full p-3 outline-none bg-white text-slate-900 placeholder-slate-300 focus:ring-2 focus:ring-emerald-500" placeholder="실명 입력" /></td>
                            <td className="p-0 border-r border-slate-200"><input type="text" value={row.username} onChange={(e) => handleDraftChange(row.rowId, 'username', e.target.value)} className="w-full p-3 outline-none bg-white text-slate-900 placeholder-slate-300 focus:ring-2 focus:ring-emerald-500" placeholder="아이디 입력" /></td>
                            <td className="p-0 text-center align-middle"><button type="button" onClick={() => handleRemoveDraftRow(row.rowId)} className="text-slate-400 hover:text-red-500 hover:bg-red-50 w-full h-full flex items-center justify-center min-h-[44px] transition-colors"><Trash2 size={16} /></button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button type="button" onClick={handleAddDraftRow} className="w-full p-3 text-xs font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center gap-1 transition-colors border-t border-slate-200"><Plus size={16} /> 줄 추가하기 (행 추가)</button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                      <Users className="text-indigo-600" size={20}/> 가입 학생 정보 
                      <span className="bg-indigo-100 text-indigo-700 text-xs px-2.5 py-0.5 rounded-full">
                        {filteredStudents.length !== students.length ? (filteredStudents.length + '명 검색됨 / ') : ''}{students.length}명
                      </span>
                    </h3>
                    <div className="relative max-w-[240px] w-full">
                      <Search className="absolute left-2.5 top-2.5 text-slate-400" size={14}/>
                      <input type="text" value={studentSearch} onChange={e => setStudentSearch(e.target.value)} placeholder="학번, 이름, 아이디 검색..." className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                        <tr><th className="p-3.5 font-bold">학번</th><th className="p-3.5 font-bold">이름</th><th className="p-3.5 font-bold">아이디</th><th className="p-3.5 text-center font-bold">로그인 횟수</th><th className="p-3.5 text-right font-bold">계정 제어</th></tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                        {filteredStudents.length === 0 ? (
                          <tr><td colSpan={5} className="p-8 text-center text-slate-400 font-bold text-xs">검색 결과가 없습니다.</td></tr>
                        ) : (
                          filteredStudents.map(st => (
                            <tr key={st.id} className="hover:bg-slate-50 transition-colors">
                              <td className="p-3.5 font-mono text-slate-500">{st.studentNumber}</td>
                              <td className="p-3.5 font-bold text-slate-900">{st.name}</td>
                              <td className="p-3.5 font-mono bg-slate-50/50">{st.username}</td>
                              <td className="p-3.5 text-center"><span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-md font-bold">{st.loginCount}회</span></td>
                              <td className="p-3.5 text-right space-x-2">
                                <button onClick={()=>handleResetPassword(st)} className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold text-xs transition-colors">비밀번호 초기화</button>
                                <button onClick={()=>handleDeleteStudent(st)} className="px-3.5 py-1.5 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 rounded-lg font-bold text-xs transition-colors">삭제</button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {currentUser?.id === 'teacher_admin' && (
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6 animate-fade-in">
                    <div className="border-b pb-3 mb-4 flex justify-between items-center">
                      <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                        <Sparkles className="text-amber-500" size={20}/> 🧑‍🏫 교사 권한 관리 및 승인 대기방
                      </h3>
                      <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-bold">승인 대기: {pendingTeachers.length}명</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">신규 가입 신청 명단</h4>
                      <div className="overflow-x-auto border border-slate-200 rounded-xl bg-slate-50/50">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-amber-50 border-b border-slate-200 text-amber-900">
                            <tr><th className="p-3 font-bold">성함</th><th className="p-3 font-bold">신청 아이디</th><th className="p-3 font-bold">신청 일자</th><th className="p-3 font-bold">상태</th><th className="p-3 text-right font-bold">권한 승인</th></tr>
                          </thead>
                          <tbody className="divide-y bg-white text-slate-700">
                            {pendingTeachers.length === 0 ? (
                              <tr><td colSpan={5} className="p-6 text-center text-slate-400 font-bold text-xs">가입 신청 대기 중인 교사 계정이 없습니다.</td></tr>
                            ) : (
                              pendingTeachers.map(pt => (
                                <tr key={pt.id} className="hover:bg-amber-50/30 transition-colors">
                                  <td className="p-3 font-bold text-slate-900">{pt.name}</td>
                                  <td className="p-3 font-mono">{pt.username}</td>
                                  <td className="p-3 text-slate-500 text-xs">{pt.joinDate}</td>
                                  <td className="p-3"><span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full font-bold">{pt.status}</span></td>
                                  <td className="p-3 text-right space-x-2">
                                    <button onClick={() => handleApproveTeacher(pt)} className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs transition-colors">임용 승인</button>
                                    <button onClick={() => handleRejectTeacher(pt)} className="px-3.5 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 rounded-lg font-bold text-xs transition-colors">반려 및 삭제</button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">정식 임용 교사 명단</h4>
                      <div className="overflow-x-auto border border-slate-200 rounded-xl">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                            <tr><th className="p-3 font-bold">성함</th><th className="p-3 font-bold">아이디</th><th className="p-3 font-bold">임용 일자</th><th className="p-3 text-center font-bold">로그인 횟수</th><th className="p-3 text-right font-bold">직권 해제</th></tr>
                          </thead>
                          <tbody className="divide-y bg-white text-slate-700">
                            {approvedTeachers.length === 0 ? (
                              <tr><td colSpan={5} className="p-6 text-center text-slate-400 font-bold text-xs">임용 완료된 교사 계정이 아직 없습니다.</td></tr>
                            ) : (
                              approvedTeachers.map(at => (
                                <tr key={at.id} className="hover:bg-slate-50 transition-colors">
                                  <td className="p-3 font-bold text-slate-900">{at.name} 선생님</td>
                                  <td className="p-3 font-mono">{at.username}</td>
                                  <td className="p-3 text-slate-500 text-xs">{at.joinDate}</td>
                                  <td className="p-3 text-center"><span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded font-bold">{at.loginCount}회</span></td>
                                  <td className="p-3 text-right">
                                    <button onClick={() => handleRejectTeacher(at)} className="px-3.5 py-1.5 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 rounded-lg font-bold text-xs transition-colors">해임 및 삭제</button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in font-sans">
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-start gap-6 relative overflow-hidden">
              <div className="space-y-3 z-10 relative">
                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-amber-200">
                  <Sparkles size={12}/> 실시간 첨삭 및 챌린지 오답방
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">문제 풀이 역량 향상 시스템<br/>문제 풀고 선생님께 첨삭+피드백 받자!</h2>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-white/10 text-indigo-100 text-xs font-medium max-w-lg space-y-1.5">
                  <p className="flex items-start gap-1.5"><ShieldAlert size={14} className="text-amber-400 shrink-0"/> 저작권 유의: 무단 유출 및 배포를 엄격히 금지합니다.</p>
                  <p className="flex items-start gap-1.5"><Key size={14} className="text-emerald-400 shrink-0"/> 계정 보안: 외부인에게 접속 정보를 공유하지 마세요.</p>
                </div>
              </div>
              {!currentUser && (
                <div className="bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/20 text-center shrink-0 w-full md:w-auto z-10">
                  <p className="text-sm font-extrabold text-white mb-3">직접 풀고 첨삭을 받으려면?</p>
                  <div className="space-y-2">
                    <button onClick={() => setAuthModal({ show: true, mode: 'student_register' })} className="w-full py-2 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold rounded-xl transition-all">🚀 1분 학생 가입</button>
                    <button onClick={() => setAuthModal({ show: true, mode: 'student_login' })} className="w-full py-2 bg-white hover:bg-slate-100 text-indigo-900 text-xs font-bold rounded-xl transition-all">기존 계정 로그인</button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2 shrink-0">
                <Filter size={16} className="text-slate-400" /> <span className="text-xs font-bold text-slate-500">해시태그 검색</span>
              </div>
              <div className="relative w-full flex-1">
                <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
                <input type="text" value={studentQuestionSearch} onChange={e => setStudentQuestionSearch(e.target.value)} placeholder="과목, 단원, 선생님 등 해시태그 검색..." className="w-full pl-9 pr-8 py-2 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none" />
                {studentQuestionSearch && <button onClick={()=>setStudentQuestionSearch('')} className="absolute right-3 top-2.5 text-slate-400">✕</button>}
              </div>
              {currentUser?.role === 'student' && (
                <div className="flex gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
                  <button onClick={() => setActiveTab('all')} className={`px-4 py-1.5 rounded-lg text-xs font-bold ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}>전체 탐색</button>
                  <button onClick={() => setActiveTab('my')} className={`px-4 py-1.5 rounded-lg text-xs font-bold ${activeTab === 'my' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}>내 오답노트</button>
                </div>
              )}
            </div>

            {activeTab === 'all' && rankingData.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
                <h3 className="font-extrabold text-lg text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="text-amber-500" size={24}/> 이달의 열공 랭킹 🏆
                </h3>
                <div className="flex gap-4 overflow-x-auto pb-4 pt-4 px-2 scrollbar-thin">
                  {rankingData.map((student, idx) => (
                    <div key={student.id} className="min-w-[155px] flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-xl relative hover:border-amber-300 transition-colors">
                      {idx === 0 && <span className="absolute -top-2 bg-amber-400 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">1위 🥇</span>}
                      {idx === 1 && <span className="absolute -top-2 bg-slate-300 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">2위 🥈</span>}
                      {idx === 2 && <span className="absolute -top-2 bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">3위 🥉</span>}
                      {idx > 2 && <span className="absolute -top-2 bg-slate-200 text-slate-600 text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">{idx + 1}위</span>}
                      
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2 mt-1 shadow-inner">
                        <span className="text-lg font-bold text-indigo-600">{anonymizeName(student.name)[0]}</span>
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{anonymizeName(student.name)}</span>
                      <span className="text-xs font-black text-indigo-600 mt-1">{student.totalScore}점</span>
                      <div className="flex gap-2 mt-2 text-[9px] text-slate-400 font-semibold text-center w-full justify-center border-t pt-2">
                        <span>제출 {student.mySubmissionsCount}</span>
                        <span>질문 {student.myQuestionsCount}</span>
                        <span>피드백 {student.myCommentsCount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-8">
              {activeTab === 'all' && pinnedQuestions.length > 0 && (
                <div>
                  <h3 className="font-extrabold text-lg flex items-center gap-2 mb-4 pl-2"><Pin className="text-amber-500 fill-amber-500" size={20}/> 주요 공지 및 챌린지</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pinnedQuestions.map(q => renderQuestionCard(q, true))}
                  </div>
                </div>
              )}
              <div>
                <div className="flex justify-between items-center mb-4 pl-2">
                  <h3 className="font-extrabold text-lg flex items-center gap-2"><BookOpen className="text-indigo-600" size={20}/> 아카이브 전체 문제</h3>
                  {currentUser?.role === 'student' && (
                    <button onClick={() => setStudentQuestionModal(true)} className="px-3 py-2 sm:px-4 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1 transition-all"><Sparkles size={14}/> 나도 질문하기</button>
                  )}
                </div>
                {regularQuestions.length === 0 ? (
                  <div className="text-center py-20 text-slate-400 font-bold bg-white rounded-2xl border"><Search size={40} className="mx-auto mb-2 opacity-30"/> 결과가 없습니다.</div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularQuestions.map(q => renderQuestionCard(q, false))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 11. 푸터 */}
      <footer className="bg-white border-t border-slate-200 py-6 shrink-0">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-400 font-semibold">
          <p>© 2026 문제 풀이 아카이브 시스템. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );

  function renderQuestionCard(q, isHighlight) {
    const isSolved = currentUser?.role === 'student' && submissions.some(s => s.questionId === q.id && s.studentId === currentUser.id);
    return (
      <div key={q.id} onClick={() => { if(!currentUser) { setAuthModal({show:true, mode:'student_login'}); alertMessage('로그인이 필요합니다!'); return; } setSelectedQuestion(q); }} className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group flex flex-col h-full ${isHighlight ? 'border-amber-300 ring-4 ring-amber-500/10 shadow-lg' : 'border-slate-200 shadow-sm'}`}>
        <div className="relative h-44 bg-slate-100 overflow-hidden shrink-0">
          <img src={q.imageUrls[0]} alt={q.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="bg-white/95 text-slate-900 px-4 py-2 rounded-xl text-xs font-black shadow flex items-center gap-1.5">
              <Eye size={14} /> 풀기 및 확인
            </span>
          </div>
          <div className="absolute top-3 left-3 flex flex-wrap gap-1 z-10 max-w-[80%]">
            {q.isPinned && <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm flex items-center gap-0.5"><Pin size={10}/>공지</span>}
            {q.isChallenge && !q.tags.includes('질문있어요') && <span className="bg-indigo-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm flex items-center gap-0.5"><Trophy size={10}/>챌린지</span>}
            {q.tags.includes('질문있어요') && <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm flex items-center gap-0.5"><MessageCircle size={10}/>질문</span>}
            {q.imageUrls.length > 1 && <span className="bg-slate-800 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm">+{q.imageUrls.length - 1}장</span>}
          </div>
          {isSolved && <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md z-10"><Check size={12} strokeWidth={3}/>제출완료</div>}
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <h4 className="font-extrabold text-slate-800 text-sm leading-tight mb-2 line-clamp-2">{q.title}</h4>
            <div className="flex flex-wrap gap-1">
              {q.tags.slice(0,3).map((tag, idx) => <span key={idx} className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">#{tag}</span>)}
            </div>
          </div>
          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-slate-400">{q.teacherName} {q.isStudentQuestion ? '학생' : '선생님'}</span>
            <ChevronRight size={14} className="text-slate-300 group-hover:text-indigo-500" />
          </div>
        </div>
      </div>
    );
  }
}
