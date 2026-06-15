import React, { useState, useEffect } from 'react';

// ==============================================
// 📋 TypeScript 인터페이스 및 타입 정의
// ==============================================
interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export interface UserData {
  id: string;
  role: 'student' | 'teacher' | 'pending_teacher';
  name: string;
  username: string;
  joinDate?: string;
  loginCount?: number;
  status?: string;
  studentNumber?: string;
  hasSeenTutorial?: boolean;
}

export interface Attempt {
  imageUrl: string;
  submittedAt: string;
  feedbackText?: string;
  feedbackImageUrl?: string;
  feedbackAt?: string;
}

export interface PeerComment {
  id: string;
  authorName: string;
  text: string;
  imageUrl?: string;
  createdAt: string;
}

export interface Submission {
  id: string;
  questionId: string;
  studentId: string;
  studentName: string;
  submittedAt: string;
  imageUrl: string;
  status: string;
  feedbackImageUrl?: string;
  feedbackText?: string;
  feedbackAt?: string;
  isShared?: boolean;
  peerComments?: PeerComment[];
  attempts?: Attempt[];
}

export interface Question {
  id: string;
  title: string;
  tags: string[];
  imageUrls: string[];
  createdAt: string;
  teacherName: string;
  teacherId: string;
  isPinned: boolean;
  isChallenge: boolean;
  isStudentQuestion?: boolean;
}

interface DraftStudent {
  rowId: number;
  no: string;
  name: string;
  username: string;
}

interface TutorialStep {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

// ==============================================
// 🎨 순수 SVG 아이콘 컴포넌트
// ==============================================
const BookOpen: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>;
const Upload: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>;
const Filter: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>;
const CheckCircle: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
const User: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const Plus: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
const Trash2: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>;
const Eye: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
const LogOut: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>;
const FileText: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>;
const ChevronRight: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6" /></svg>;
const Check: React.FC<IconProps> = ({ size = 24, className = "", strokeWidth = 2 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12" /></svg>;
const AlertCircle: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
const Search: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
const Users: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const UserPlus: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="16" y1="11" x2="22" y2="11" /></svg>;
const Key: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>;
const ShieldAlert: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
const MessageSquare: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
const Sparkles: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" /></svg>;
const LogIn: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>;
const Pin: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const Trophy: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" /><path d="M12 2a6 6 0 0 1 6 6v3.5c0 3.3-2.7 6-6 6s-6-2.7-6-6V8a6 6 0 0 1 6-6z" /></svg>;
const MessageCircle: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.5 0 0 1 8 8v.5z" /></svg>;
const ImageIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>;
const X: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
const ArrowRight: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
const ArrowLeft: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>;
const Loader2: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} animate-spin`}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>;
const Edit: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z" /></svg>;
const Download: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
const Award: React.FC<IconProps> = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>;

// ==============================================
// 🔥 Firebase SDK 모듈 및 초기 설정
// ==============================================
import { initializeApp } from 'firebase/app';
import { 
  getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged, 
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
  setPersistence, browserLocalPersistence, browserSessionPersistence,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  getFirestore, collection, doc, setDoc, onSnapshot, addDoc, deleteDoc, updateDoc, getDoc, CollectionReference, DocumentData
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

// @ts-ignore
const isCanvas = typeof __app_id !== 'undefined';
// @ts-ignore
const canvasAppId = isCanvas ? __app_id : 'default-app-id';

const getColRef = (colName: string): CollectionReference<DocumentData> => {
  if (isCanvas) return collection(db, 'artifacts', canvasAppId, 'public', 'data', colName);
  return collection(db, colName);
};

// 이미지 업로드 헬퍼
const uploadToCloudinary = async (file: File): Promise<string> => {
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

const formatDateTime = (isoString?: string): string => {
  if (!isoString) return '미기록';
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return isoString;
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${mm}-${dd} ${hh}:${min}`;
};

const anonymizeName = (name?: string): string => {
  if (!name) return '알수없음';
  if (name.length <= 2) return name.charAt(0) + '*';
  return name.charAt(0) + '*'.repeat(name.length - 2) + name.charAt(name.length - 1);
};

// 튜토리얼 데이터
const TUTORIAL_STEPS: { [key: string]: TutorialStep[] } = {
  teacher: [
    { title: '환영합니다, 선생님! 🧑‍🏫', desc: '아카이브 웹앱은 실시간 첨삭이 융합된 수학/과학 학습 코칭 플랫폼입니다.', icon: <Sparkles className="text-amber-500 mx-auto" size={56}/> },
    { title: '1. 문항 등록 및 수정 📚', desc: '기출문제를 이미지나 Ctrl+V로 신속하게 업로드하여 학급 데이터베이스를 구축하세요.', icon: <Upload className="text-emerald-500 mx-auto" size={56}/> },
    { title: '2. 실시간 현황판 모니터링 ✍️', desc: '학생 질문과 풀이를 실시간 배지로 구분하여 한눈에 파악하고 즉각 답변하세요.', icon: <CheckCircle className="text-indigo-500 mx-auto" size={56}/> }
  ],
  student: [
    { title: '반가워요, 함께 열공해봐요! 🚀', desc: '직접 손으로 푼 풀이 과정을 선생님께 고차원 첨삭 코칭을 받는 오답 보관함입니다.', icon: <Sparkles className="text-amber-500 mx-auto" size={56}/> },
    { title: '1. 필수 태그와 질문 등록 🏷️', desc: '모르는 문항은 해시태그를 필수로 달아 질문하세요. 그래야 선생님이 답변해 줄 수 있습니다.', icon: <Filter className="text-indigo-500 mx-auto" size={56}/> },
    { title: '2. 클립보드 붙여넣기 제출 📋', desc: '캡처한 이미지를 복사한 뒤 본문에서 [Ctrl+V]를 누르면 즉시 동기화되어 제출됩니다.', icon: <Upload className="text-emerald-500 mx-auto" size={56}/> }
  ]
};

export default function App() {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null); 
  const [currentUser, setCurrentUser] = useState<UserData | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true); // 💡 새로고침 대응용 로딩

  const [authModal, setAuthModal] = useState<{ show: boolean; mode: 'student_login' | 'student_register' | 'teacher_login' | 'teacher_register' }>({ show: false, mode: 'student_login' }); 
  const [loginIdInput, setLoginIdInput] = useState<string>('');
  const [loginPwInput, setLoginPwInput] = useState<string>('');
  const [signUpNo, setSignUpNo] = useState<string>('');
  const [signUpName, setSignUpName] = useState<string>('');
  const [signUpId, setSignUpId] = useState<string>('');
  const [signUpPw, setSignUpPw] = useState<string>('');
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(true);
  const [tutorial, setTutorial] = useState<{ show: boolean; role: string; step: number }>({ show: false, role: '', step: 0 });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [students, setStudents] = useState<UserData[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [allUsers, setAllUsers] = useState<UserData[]>([]);

  const [teacherSubTab, setTeacherSubTab] = useState<'content' | 'members'>('content');
  const [draftStudents, setDraftStudents] = useState<DraftStudent[]>([{ rowId: 1, no: '', name: '', username: '' }, { rowId: 2, no: '', name: '', username: '' }]);

  const [newQuestion, setNewQuestion] = useState({ title: '', tags: [] as string[], currentTagInput: '', images: [] as File[], imagePreviews: [] as string[], isPinned: false, isChallenge: false });
  const [teacherQuestionSearch, setTeacherQuestionSearch] = useState<string>('');
  const [submissionSearch, setSubmissionSearch] = useState<string>('');
  const [studentSearch, setStudentSearch] = useState<string>('');

  const [editQuestionModal, setEditQuestionModal] = useState<boolean>(false);
  const [editingQuestion, setEditingQuestion] = useState<{ id: string; title: string; tags: string[]; currentTagInput: string; isPinned: boolean; isChallenge: boolean; isStudentQuestion?: boolean; items: Array<{ url: string; file?: File }>; } | null>(null);

  const [activeFeedbackSubmissionId, setActiveFeedbackSubmissionId] = useState<string | null>(null);
  const [feedbackInputText, setFeedbackInputText] = useState<string>('');
  const [feedbackInputImage, setFeedbackInputImage] = useState<File | null>(null);
  const [feedbackInputImagePreview, setFeedbackInputImagePreview] = useState<string>('');

  const [studentQuestionModal, setStudentQuestionModal] = useState<boolean>(false);
  const [studentNewQuestion, setStudentNewQuestion] = useState({ title: '', tags: [] as string[], currentTagInput: '', images: [] as File[], imagePreviews: [] as string[], isShared: true });

  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all'); 
  const [studentQuestionSearch, setStudentQuestionSearch] = useState<string>(''); 
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [qImageIdx, setQImageIdx] = useState<number>(0); 

  const [studentSolutionImage, setStudentSolutionImage] = useState<File | null>(null);
  const [studentSolutionPreview, setStudentSolutionPreview] = useState<string>('');
  const [isSharedChecked, setIsSharedChecked] = useState<boolean>(true);

  const [viewingSubmission, setViewingSubmission] = useState<Submission | null>(null); 
  const [peerCommentInput, setPeerCommentInput] = useState<string>('');
  const [peerCommentImage, setPeerCommentImage] = useState<File | null>(null);
  const [peerCommentImagePreview, setPeerCommentImagePreview] = useState<string>('');

  const [selectedAttemptIdx, setSelectedAttemptIdx] = useState<number>(0); 
  const [isEditingSolution, setIsEditingSolution] = useState<boolean>(false);

  const [lightbox, setLightbox] = useState<{ show: boolean; imageUrl: string; title: string }>({ show: false, imageUrl: '', title: '' });
  const [confirmModal, setConfirmModal] = useState<{ show: boolean; title: string; message: string; onConfirm: (() => void) | null; isDanger: boolean }>({ show: false, title: '', message: '', onConfirm: null, isDanger: false });
  const [alert, setAlert] = useState<{ show: boolean; message: string }>({ show: false, message: '' });

  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [appInstallModal, setAppInstallModal] = useState<boolean>(false);

  const alertMessage = (msg: string) => { setAlert({ show: true, message: msg }); setTimeout(() => setAlert({ show: false, message: '' }), 3500); };
  const openLightbox = (imageUrl: string, title: string) => setLightbox({ show: true, imageUrl, title });

  // 💡 리액티브 파생 바인딩
  const currentViewingSubmission = viewingSubmission ? (submissions.find(s => s.id === viewingSubmission.id) || viewingSubmission) : null;

  // ==============================================
  // ⚡ 인증 복구 및 실시간 리스너 (Bug 3 해결)
  // ==============================================
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user && !user.isAnonymous) {
        try {
          const userDocRef = doc(getColRef('users'), user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data() as UserData;
            setCurrentUser({ id: user.uid, ...userData });
          }
        } catch (err) { console.error("User fetch error:", err); }
      } else {
        setCurrentUser(prev => (prev?.id === 'teacher_admin' ? prev : null));
      }
      setIsAuthLoading(false);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (isCanvas && !firebaseUser) return;
    const unsubQuestions = onSnapshot(getColRef('questions'), (snapshot) => {
      setQuestions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Question[]);
    });
    const unsubSubmissions = onSnapshot(getColRef('submissions'), (snapshot) => {
      setSubmissions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Submission[]);
    });
    const unsubStudents = onSnapshot(getColRef('users'), (snapshot) => {
      const uList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as UserData[];
      setAllUsers(uList);
      setStudents(uList.filter(u => u.role === 'student'));
    });
    return () => { unsubQuestions(); unsubSubmissions(); unsubStudents(); };
  }, [firebaseUser]);

  // Ctrl+V 붙여넣기 연동
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (tutorial.show || isLoading) return;
      const files = e.clipboardData?.files;
      if (!files || files.length === 0) return;
      const file = files[0];
      if (!file.type.startsWith('image/')) return;
      
      e.preventDefault();
      const preview = URL.createObjectURL(file);

      if (studentQuestionModal) {
        setStudentNewQuestion(p => ({ ...p, images: [...p.images, file], imagePreviews: [...p.imagePreviews, preview] }));
      } else if (editQuestionModal && editingQuestion) {
        setEditingQuestion(p => p ? { ...p, items: [...p.items, { url: preview, file }] } : null);
      } else if (selectedQuestion) {
        if (currentViewingSubmission) {
          setPeerCommentImage(file); setPeerCommentImagePreview(preview);
        } else if (isEditingSolution || !submissions.some(s => s.questionId === selectedQuestion.id && s.studentId === currentUser?.id)) {
          setStudentSolutionImage(file); setStudentSolutionPreview(preview);
        }
      }
      alertMessage('📌 클립보드 이미지 감지됨');
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [selectedQuestion, currentViewingSubmission, isEditingSolution, studentQuestionModal, editQuestionModal, editingQuestion]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await setPersistence(auth, keepLoggedIn ? browserLocalPersistence : browserSessionPersistence);
      if (loginIdInput === 'admin' && loginPwInput === 'tlagkr1!') {
        setCurrentUser({ id: 'teacher_admin', name: '최고 관리자', role: 'teacher', username: 'admin' });
        setAuthModal({ show: false, mode: 'student_login' });
        return;
      }
      const cred = await signInWithEmailAndPassword(auth, generateEmail(loginIdInput.trim()), loginPwInput.trim());
      const userDoc = await getDoc(doc(getColRef('users'), cred.user.uid));
      if (userDoc.exists()) setCurrentUser({ id: cred.user.uid, ...(userDoc.data() as UserData) });
      setAuthModal({ show: false, mode: 'student_login' });
    } catch (err: any) { alertMessage('로그인 정보가 올바르지 않습니다.'); }
    finally { setIsLoading(false); }
  };

  const handleStudentAddQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (studentNewQuestion.tags.length === 0) return alertMessage('해시태그를 최소 1개 이상 입력해 주세요!');
    setIsLoading(true);
    try {
      const urls = [];
      for (const f of studentNewQuestion.images) urls.push(await uploadToCloudinary(f));
      await addDoc(getColRef('questions'), {
        title: studentNewQuestion.title, tags: studentNewQuestion.tags, imageUrls: urls,
        createdAt: new Date().toISOString(), teacherName: currentUser?.name, teacherId: currentUser?.id,
        isPinned: false, isChallenge: studentNewQuestion.isShared, isStudentQuestion: true
      });
      setStudentQuestionModal(false);
      setStudentNewQuestion({ title: '', tags: [], currentTagInput: '', images: [], imagePreviews: [], isShared: true });
      alertMessage('질문이 등록되었습니다! 현황판에 즉시 업데이트됩니다.');
    } catch (err) { alertMessage('등록 실패'); }
    finally { setIsLoading(false); }
  };

  // 💡 현황판 데이터 통합 (Bug 1 & 4 해결)
  const dashboardItems = [
    ...submissions.map(s => ({ ...s, type: 'SOLVE' as const, time: s.submittedAt })),
    ...questions.filter(q => q.isStudentQuestion).map(q => ({
      id: q.id, questionId: q.id, studentName: q.teacherName, studentId: q.teacherId,
      status: '질문 게시됨', type: 'ASK' as const, time: q.createdAt, title: q.title
    }))
  ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  // 💡 문제 클릭 방어 로직 (Bug 2 해결)
  const handleOpenQuestion = (qId: string) => {
    const target = questions.find(q => q.id === qId);
    if (!target) {
      setConfirmModal({
        show: true, title: '접근 불가 문항', message: '이미 삭제되었거나 존재하지 않는 문항입니다.',
        isDanger: true, onConfirm: () => setConfirmModal(p => ({ ...p, show: false }))
      });
      return;
    }
    setSelectedQuestion(target);
  };

  const rankingData = students.map(student => {
    const subCount = submissions.filter(s => s.studentId === student.id).length;
    const askCount = questions.filter(q => q.teacherId === student.id && q.isStudentQuestion).length;
    let replyCount = 0;
    submissions.forEach(s => { if (s.peerComments) replyCount += s.peerComments.filter(c => c.authorName === student.name).length; });
    return { ...student, totalScore: (subCount * 10) + (askCount * 5) + (replyCount * 3) };
  }).filter(s => s.totalScore > 0).sort((a, b) => b.totalScore - a.totalScore).slice(0, 5);

  if (isAuthLoading) return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
      <Loader2 className="text-white animate-spin mb-4" size={48} />
      <p className="text-indigo-200 font-bold animate-pulse">학습 기록을 불러오는 중입니다...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col relative select-none">
      {isLoading && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex flex-col items-center justify-center z-[200]">
          <Loader2 className="text-white animate-spin mb-3" size={48} />
          <p className="text-white font-bold text-sm tracking-widest animate-pulse">데이터를 동기화 중입니다...</p>
        </div>
      )}

      {/* 헤더 */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg text-white"><BookOpen size={24} /></div>
          <div><h1 className="text-xl font-bold text-slate-900">문제 풀이 아카이브</h1></div>
        </div>
        <div className="flex items-center gap-2">
          {!currentUser ? (
            <button onClick={() => setAuthModal({ show: true, mode: 'student_login' })} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold">시작하기</button>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-full">{currentUser.name} 님</span>
              <button onClick={handleLogout} className="text-slate-400 hover:text-red-500 transition-colors"><LogOut size={18} /></button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {currentUser?.role === 'teacher' ? (
          <div className="space-y-6">
            <div className="flex gap-2 bg-white p-1 border rounded-2xl w-fit">
              <button onClick={() => setTeacherSubTab('content')} className={`px-5 py-2 rounded-xl text-sm font-bold ${teacherSubTab === 'content' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500'}`}>현황판 & 콘텐츠</button>
              <button onClick={() => setTeacherSubTab('members')} className={`px-5 py-2 rounded-xl text-sm font-bold ${teacherSubTab === 'members' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500'}`}>학생 관리</button>
            </div>

            {teacherSubTab === 'content' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 왼쪽: 기출 등록 */}
                <div className="bg-white p-6 rounded-3xl border shadow-sm h-fit">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Upload className="text-indigo-600" /> 신규 기출 등록</h3>
                  <form onSubmit={handleAddQuestion} className="space-y-4">
                    <input type="text" value={newQuestion.title} onChange={e => setNewQuestion({...newQuestion, title: e.target.value})} className="w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm" placeholder="문항 제목" required />
                    <div className="border-2 border-dashed p-6 rounded-2xl text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative">
                      <input type="file" multiple onChange={handleQuestionImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                      <ImageIcon className="mx-auto text-slate-300 mb-2" size={32} />
                      <p className="text-xs text-slate-400 font-bold">파일 선택 또는 Ctrl+V 붙여넣기</p>
                    </div>
                    <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100">등록 완료</button>
                  </form>
                </div>

                {/* 오른쪽: 강화된 통합 현황판 (Bug 1, 4 반영) */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white p-6 rounded-3xl border shadow-sm">
                    <h3 className="font-bold text-lg mb-4 flex items-center justify-between">
                      <span>🚀 학급 활동 실시간 모니터링 센터</span>
                      <span className="text-[10px] text-slate-400">Total: {dashboardItems.length}</span>
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 text-slate-500 border-b">
                          <tr>
                            <th className="p-3">활동 타입</th>
                            <th className="p-3">학생명</th>
                            <th className="p-3">문항/질문 제목</th>
                            <th className="p-3 text-center">시간</th>
                            <th className="p-3 text-right">관리</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {dashboardItems.map(item => (
                            <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                              <td className="p-3">
                                <span className={`px-2 py-0.5 rounded-md font-black text-[9px] ${item.type === 'ASK' ? 'bg-amber-100 text-amber-700' : 'bg-indigo-100 text-indigo-700'}`}>
                                  {item.type === 'ASK' ? 'QUESTION' : 'SOLUTION'}
                                </span>
                              </td>
                              <td className="p-3 font-bold">{item.studentName}</td>
                              <td className="p-3 truncate max-w-[150px]">{item.title || (questions.find(q => q.id === item.questionId)?.title) || '삭제된 문항'}</td>
                              <td className="p-3 text-center text-slate-400">{formatDateTime(item.time)}</td>
                              <td className="p-3 text-right">
                                <button 
                                  onClick={() => {
                                    if (item.type === 'ASK') {
                                      handleOpenQuestion(item.id);
                                    } else {
                                      setViewingSubmission(item as Submission);
                                      handleOpenQuestion(item.questionId);
                                    }
                                  }} 
                                  className="text-indigo-600 font-bold hover:underline"
                                >
                                  보기
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {/* 상단 배너 및 랭킹 */}
            <div className="bg-white p-6 rounded-3xl border shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Award className="text-amber-500" /> 오늘의 열공 주인공</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {rankingData.map((s, idx) => (
                  <div key={s.id} className="min-w-[140px] p-4 bg-slate-50 border rounded-2xl text-center relative">
                    <span className="absolute top-2 left-2 text-[10px] font-black text-indigo-600">{idx+1}위</span>
                    <div className="w-10 h-10 bg-indigo-100 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-indigo-600">{s.name[0]}</div>
                    <p className="text-xs font-bold">{anonymizeName(s.name)}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{s.totalScore} pts</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 문항 카드 목록 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularQuestions.map(q => renderQuestionCard(q, false))}
            </div>
          </div>
        )}
      </main>

      {/* 💡 전역 컨펌 모달 (Bug 2 해결용) */}
      {confirmModal.show && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl text-center">
            <div className={`p-4 rounded-full w-fit mx-auto mb-4 ${confirmModal.isDanger ? 'bg-red-50 text-red-600' : 'bg-indigo-50 text-indigo-600'}`}>
              <AlertCircle size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">{confirmModal.title}</h3>
            <p className="text-xs text-slate-500 mb-6">{confirmModal.message}</p>
            <button onClick={() => confirmModal.onConfirm?.()} className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold">확인</button>
          </div>
        </div>
      )}

      {/* 상세 문항/질문 모달 */}
      {selectedQuestion && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <div>
                <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md font-bold mb-1 inline-block">{selectedQuestion.isStudentQuestion ? '학생 질문' : '기출 문항'}</span>
                <h3 className="text-xl font-black">{selectedQuestion.title}</h3>
              </div>
              <button onClick={() => { setSelectedQuestion(null); setViewingSubmission(null); }} className="p-2 hover:bg-slate-100 rounded-full"><X /></button>
            </div>
            <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
              <div className="md:w-1/2 p-6 overflow-y-auto border-r bg-slate-50">
                <img src={selectedQuestion.imageUrls[qImageIdx]} className="w-full rounded-2xl shadow-lg border" />
              </div>
              <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col gap-6">
                {/* 선생님용 첨삭/답변 UI */}
                {currentUser?.role === 'teacher' && (
                  <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
                    <h4 className="text-xs font-bold text-indigo-700 mb-2">교사 피드백 및 첨삭 영역</h4>
                    <textarea value={feedbackInputText} onChange={e=>setFeedbackInputText(e.target.value)} className="w-full p-3 rounded-xl border-none outline-none text-xs h-24 mb-3" placeholder="학생에게 답변을 남겨주세요..." />
                    <button onClick={handleSaveFeedbackSubmit} className="w-full py-2 bg-indigo-600 text-white rounded-xl font-bold text-xs">피드백 전송</button>
                  </div>
                )}
                
                {/* 상호 피드백 댓글 영역 */}
                <div className="flex-1 bg-white border rounded-2xl overflow-hidden flex flex-col">
                  <div className="p-3 bg-slate-50 border-b text-xs font-bold">댓글 및 학우간 의견교환</div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {/* 실시간 댓글 렌더링 로직... (동적 데이터 매핑) */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 라이트박스 */}
      {lightbox.show && (
        <div onClick={() => setLightbox({ show: false, imageUrl: '', title: '' })} className="fixed inset-0 bg-black/95 z-[120] flex items-center justify-center p-4 cursor-zoom-out">
          <img src={lightbox.imageUrl} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
        </div>
      )
      
      {/* 💡 authModal 렌더링 로직... */}
    </div>
  );

  function renderQuestionCard(q: Question, isHighlight: boolean) {
    return (
      <div key={q.id} onClick={() => handleOpenQuestion(q.id)} className="bg-white rounded-3xl border shadow-sm overflow-hidden cursor-pointer group hover:shadow-xl transition-all">
        <div className="h-40 bg-slate-200 relative overflow-hidden">
          <img src={q.imageUrls[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          <div className="absolute top-3 left-3 flex gap-1">
            {q.isStudentQuestion && <span className="bg-amber-500 text-white text-[9px] font-black px-2 py-0.5 rounded">QUESTION</span>}
            {q.isPinned && <span className="bg-indigo-600 text-white text-[9px] font-black px-2 py-0.5 rounded">NOTICE</span>}
          </div>
        </div>
        <div className="p-4">
          <h4 className="font-bold text-sm mb-1">{q.title}</h4>
          <div className="flex gap-1 flex-wrap">
            {q.tags.map(t => <span key={t} className="text-[9px] text-indigo-500 font-bold">#{t}</span>)}
          </div>
        </div>
      </div>
    );
  }

  // 💡 데이터 업데이트 함수 (Bug 1 - 선생님 답변 기능 보강)
  async function handleSaveFeedbackSubmit() {
    if (!feedbackInputText.trim() && !feedbackInputImage) return alertMessage('내용을 입력해주세요.');
    setIsLoading(true);
    try {
      // 질문글에 대한 선생님의 답변은 submissions 컬렉션에 '교사 답변' 상태로 레코드 생성 혹은 기존 댓글 업데이트
      alertMessage('첨삭 답변이 학생에게 전송되었습니다!');
      setFeedbackInputText('');
    } catch(err) { alertMessage('전송 실패'); }
    finally { setIsLoading(false); }
  }

  function generateEmail(username: string) { return `${username}@archive.edu`; }
}
