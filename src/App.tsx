import React, { useState, useEffect } from 'react';

// ==============================================
// 📋 TypeScript 인터페이스 및 타입 정의
// ==============================================
interface IconProps { size?: number; className?: string; strokeWidth?: number; }

export interface UserData {
  id: string; role: 'student' | 'teacher' | 'pending_teacher' | 'pending_student';
  name: string; username: string; joinDate?: string; loginCount?: number;
  status?: string; studentNumber?: string; hasSeenTutorial?: boolean;
  admissionYear?: string;
}

export interface Attempt { imageUrl: string; submittedAt: string; feedbackText?: string; feedbackImageUrl?: string; feedbackAt?: string; }
export interface PeerComment { id: string; authorName: string; text: string; imageUrl?: string; createdAt: string; }

export interface Submission {
  id: string; questionId: string; studentId: string; studentName: string;
  submittedAt: string; imageUrl: string; status: string;
  feedbackImageUrl?: string; feedbackText?: string; feedbackAt?: string;
  isShared?: boolean; peerComments?: PeerComment[]; attempts?: Attempt[];
}

export interface Question {
  id: string; title: string; tags: string[]; imageUrls: string[];
  createdAt: string; teacherName: string; teacherId: string;
  isPinned: boolean; isChallenge: boolean; isStudentQuestion?: boolean;
  feedbackImageUrl?: string; feedbackText?: string; feedbackAt?: string; status?: string;
}

interface DraftStudent { rowId: number; no: string; name: string; username: string; }
interface TutorialStep { title: string; desc: string; icon: React.ReactNode; }

// ==============================================
// 🎨 순수 SVG 아이콘 컴포넌트
// ==============================================
const BookOpen: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const Upload: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>;
const Filter: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const CheckCircle: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const User: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const Plus: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const Trash2: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;
const Eye: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const LogOut: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const FileText: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
const ChevronRight: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"/></svg>;
const Check: React.FC<IconProps> = ({ size=24, className="", strokeWidth=2 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>;
const AlertCircle: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
const Search: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const Users: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Lock: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const MessageSquare: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const Sparkles: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>;
const Pin: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const Trophy: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3.5c0 3.3-2.7 6-6 6s-6-2.7-6-6V8a6 6 0 0 1 6-6z"/></svg>;
const MessageCircle: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.5 0 0 1 8 8v.5z"/></svg>;
const ImageIcon: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
const X: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const ArrowRight: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const ArrowLeft: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
const Loader2: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} animate-spin`}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;
const Edit: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4zM11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/></svg>;
const Download: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const Award: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>;
const Paperclip: React.FC<IconProps> = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.18 1-.78 1.85-1.63 2.42v2.81h2.64c1.55-1.42 2.63-3.53 2.63-6.24z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-2.64-2.81c-.74.5-1.68.8-2.64.8-2.03 0-3.75-1.37-4.36-3.21H2.1v2.91C3.92 21.03 7.71 23 12 23z"/>
    <path fill="#FBBC05" d="M7.64 15.12c-.15-.45-.24-.93-.24-1.43s.09-.98.24-1.43V9.35H2.1a11.93 11.93 0 000 10.65l5.54-2.88z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.71 1 3.92 2.97 2.1 6.44l5.54 2.88c.61-1.84 2.33-3.21 4.36-3.21z"/>
  </svg>
);

// ==============================================
// 🔥 Firebase SDK 모듈 및 초기 설정
// ==============================================
import { initializeApp } from 'firebase/app';
import { 
  getAuth, onAuthStateChanged, signOut,
  GoogleAuthProvider, signInWithPopup, signInWithCustomToken, getRedirectResult, signInWithRedirect
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
const googleProvider = new GoogleAuthProvider();

// @ts-ignore
const isCanvas = typeof __app_id !== 'undefined';
// @ts-ignore
const canvasAppId = isCanvas ? __app_id : 'default-app-id';

const getColRef = (colName: string): CollectionReference<DocumentData> => {
  if (isCanvas) return collection(db, 'artifacts', canvasAppId, 'public', 'data', colName);
  return collection(db, colName);
};

const uploadToCloudinary = async (file: File): Promise<string> => {
  const cloudName = "dyhaocbcx"; const uploadPreset = "archive_preset"; 
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const formData = new FormData(); formData.append('file', file); formData.append('upload_preset', uploadPreset);
  const response = await fetch(url, { method: 'POST', body: formData });
  if (!response.ok) throw new Error('Cloudinary 이미지 업로드 실패');
  const data = await response.json(); return data.secure_url;
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
  const [currentUser, setCurrentUser] = useState<UserData | null>(() => {
    if (typeof window !== 'undefined') {
      const localUser = window.localStorage.getItem('savedUser');
      if (localUser) {
        try { return JSON.parse(localUser); } catch(e) {}
      }
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);

  // 💡 구글 100% 전용 전환: 역할 선택 모달만 남김
  const [showRoleModal, setShowRoleModal] = useState<boolean>(false);
  const [pendingGoogleUser, setPendingGoogleUser] = useState<FirebaseUser | null>(null);
  const [googleRoleSelect, setGoogleRoleSelect] = useState<'student' | 'teacher'>('student');
  const [googleAdmissionYear, setGoogleAdmissionYear] = useState('');
  const [googleStudentNo, setGoogleStudentNo] = useState('');
  const [adminSecret, setAdminSecret] = useState(''); // 💡 관리자 자동 승급용 시크릿 코드
  
  const [rankingConfig, setRankingConfig] = useState({ startDate: '', endDate: '' });

  const [tutorial, setTutorial] = useState<{ show: boolean; role: string; step: number }>({ show: false, role: '', step: 0 });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [students, setStudents] = useState<UserData[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [allUsers, setAllUsers] = useState<UserData[]>([]);

  const [teacherSubTab, setTeacherSubTab] = useState<'content' | 'members'>('content');

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

  const currentViewingSubmission = viewingSubmission ? (submissions.find(s => s.id === viewingSubmission.id) || viewingSubmission) : null;

  useEffect(() => {
    document.title = "문제 풀이 아카이브";
    const handler = (e: Event) => { e.preventDefault(); setDeferredPrompt(e); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
      else setAppInstallModal(true);
    } else setAppInstallModal(true);
  };

  useEffect(() => {
    const initCanvasAuth = async () => {
      if (isCanvas && typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
        try { await signInWithCustomToken(auth, __initial_auth_token); } catch (e) {}
      }
    };
    initCanvasAuth();
    
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        try {
          const userDoc = await getDoc(doc(getColRef('users'), user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data() as UserData;
            if (userData.role === 'pending_teacher' || userData.role === 'pending_student') {
              await signOut(auth);
              setCurrentUser(null);
              localStorage.removeItem('savedUser');
            } else {
              const u = { id: user.uid, ...userData };
              setCurrentUser(u);
              localStorage.setItem('savedUser', JSON.stringify(u));
            }
          } else {
            // DB에 데이터가 없으면 신규 가입 역할 선택 모달 오픈
            if (user.providerData.some(p => p.providerId === 'google.com')) {
              setPendingGoogleUser(user);
              setShowRoleModal(true);
            }
          }
        } catch (err) {}
      } else {
        setCurrentUser(null);
        localStorage.removeItem('savedUser');
      }
      setIsAuthLoading(false);
    });
    return () => unsubscribeAuth();
  }, []);

  // 💡 보안 권한 에러 해결: FirebaseUser 로그인 상태에 따라 onSnapshot 동적 구독
  useEffect(() => {
    if (isAuthLoading) return;

    setIsLoading(true);

    let unsubConfig = () => {};
    if (firebaseUser) {
      unsubConfig = onSnapshot(doc(getColRef('settings'), 'rankingConfig'), (docSnap) => {
        if (docSnap.exists()) {
          setRankingConfig(docSnap.data() as { startDate: string, endDate: string });
        } else {
          setRankingConfig({ startDate: '', endDate: '' });
        }
      }, (err: any) => {
        if (err.code !== 'permission-denied') console.error("Settings 권한 오류:", err);
      });
    }

    // 1. 누구나 읽을 수 있는 데이터 (Questions, Users)
    const unsubQ = onSnapshot(getColRef('questions'), 
      (snap) => {
        setQuestions(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Question[]);
        setIsLoading(false);
      },
      (err: any) => {
        if (err.code !== 'permission-denied') console.error("Questions 권한 오류:", err);
        setIsLoading(false);
      }
    );
    
    const unsubU = onSnapshot(getColRef('users'), 
      (snap) => {
        const uList = snap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as UserData[];
        setAllUsers(uList); 
        setStudents(uList.filter(u => u.role === 'student')); 
      }, 
      (err: any) => {
        if (err.code !== 'permission-denied') console.error("Users 권한 오류:", err);
      }
    );

    // 2. 로그인된 사용자만 읽을 수 있는 보안 데이터 (Submissions)
    let unsubS = () => {};
    if (firebaseUser) {
      unsubS = onSnapshot(getColRef('submissions'), 
        (snap) => setSubmissions(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Submission[]),
        (err: any) => {
          if (err.code !== 'permission-denied') console.error("Submissions 권한 오류:", err);
        }
      );
    } else {
      setSubmissions([]); // 로그아웃 상태일 때 초기화
    }

    return () => { unsubQ(); unsubS(); unsubU(); unsubConfig(); };
  }, [firebaseUser, isAuthLoading]);

  useEffect(() => {
    setQImageIdx(0); setIsEditingSolution(false);
    const targetSub = viewingSubmission || submissions.find(s => s.questionId === selectedQuestion?.id && s.studentId === currentUser?.id);
    if (targetSub) setSelectedAttemptIdx(targetSub.attempts ? targetSub.attempts.length - 1 : 0); 
  }, [selectedQuestion?.id, viewingSubmission?.id, submissions.length]);

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if(tutorial.show || isLoading) return;
      const items = e.clipboardData?.items;
      if (!items) return;
      let imageFile: File | null = null;
      for (let i = 0; i < items.length; i++) { 
        if (items[i].type.indexOf('image') !== -1) { 
          imageFile = items[i].getAsFile(); 
          break; 
        } 
      }
      if (!imageFile) return;

      e.preventDefault();
      const validImageFile = imageFile;
      const preview = URL.createObjectURL(validImageFile);
      
      if (studentQuestionModal) {
        setStudentNewQuestion(prev => {
          const updatedImages = prev.images.concat(validImageFile);
          const updatedPreviews = prev.imagePreviews.concat(preview);
          return { ...prev, images: updatedImages, imagePreviews: updatedPreviews };
        });
        alertMessage('📌 클립보드 질문 이미지 추가');
      } else if (editQuestionModal && editingQuestion) {
        setEditingQuestion(prev => {
          if (!prev) return null;
          const updatedItems = prev.items.concat({ url: preview, file: validImageFile });
          return { ...prev, items: updatedItems };
        });
        alertMessage('📌 수정용 클립보드 이미지 추가 완료');
      } else if (selectedQuestion) {
        if (currentUser?.role === 'student' && !viewingSubmission) { setStudentSolutionImage(validImageFile); setStudentSolutionPreview(preview); alertMessage('📌 클립보드 이미지 첨부'); } 
        else if (currentUser?.role === 'student' && viewingSubmission && isEditingSolution) { setStudentSolutionImage(validImageFile); setStudentSolutionPreview(preview); alertMessage('📌 수정용 클립보드 이미지 첨부'); } 
        else if (currentUser?.role === 'student' && viewingSubmission && !isEditingSolution) { setPeerCommentImage(validImageFile); setPeerCommentImagePreview(preview); alertMessage('📌 댓글용 이미지 첨부'); } 
        else if (currentUser?.role === 'teacher' && viewingSubmission) { setFeedbackInputImage(validImageFile); setFeedbackInputImagePreview(preview); alertMessage('📌 클립보드 첨삭 추가'); }
        else if (currentUser?.role === 'teacher' && !viewingSubmission && selectedQuestion.isStudentQuestion) { setFeedbackInputImage(validImageFile); setFeedbackInputImagePreview(preview); alertMessage('📌 질문 코칭 이미지 추가'); }
      } else if (currentUser?.role === 'teacher' && teacherSubTab === 'content') {
        setNewQuestion(prev => {
          const updatedImages = prev.images.concat(validImageFile);
          const updatedPreviews = prev.imagePreviews.concat(preview);
          return { ...prev, images: updatedImages, imagePreviews: updatedPreviews };
        });
        alertMessage('📌 클립보드 기출문제 추가');
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [selectedQuestion, currentUser, viewingSubmission, teacherSubTab, tutorial.show, isLoading, isEditingSolution, studentQuestionModal, editQuestionModal, editingQuestion]);

  // ==============================================
  // 💡 데이터 제어(Handler) 함수들
  // ==============================================

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); 
      const val = newQuestion.currentTagInput.trim().replace(/^#/, '');
      if (val && !newQuestion.tags.includes(val)) {
        setNewQuestion({ ...newQuestion, tags: newQuestion.tags.concat(val), currentTagInput: '' });
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setNewQuestion({ ...newQuestion, tags: newQuestion.tags.filter(t => t !== tagToRemove) });
  };

  const handleQuestionImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 0) {
      setNewQuestion(prev => ({ 
        ...prev, 
        images: prev.images.concat(files), 
        imagePreviews: prev.imagePreviews.concat(files.map(f => URL.createObjectURL(f))) 
      }));
    }
  };

  const handleDropQuestion = (e: React.DragEvent) => {
    e.preventDefault(); 
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    if (files.length > 0) {
      setNewQuestion(prev => ({ 
        ...prev, 
        images: prev.images.concat(files), 
        imagePreviews: prev.imagePreviews.concat(files.map(f => URL.createObjectURL(f))) 
      }));
    }
  };

  const removeQuestionPreview = (index: number) => {
    setNewQuestion(prev => ({ 
      ...prev, 
      images: prev.images.filter((_, i) => i !== index), 
      imagePreviews: prev.imagePreviews.filter((_, i) => i !== index) 
    }));
  };

  // 💡 구글 소셜 100% 단독 로그인 로직
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userDocRef = doc(getColRef('users'), user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data() as UserData;
        if (userData.role === 'pending_teacher' || userData.role === 'pending_student') {
          await signOut(auth);
          alertMessage('가입 승인 대기 중입니다. 선생님의 승인을 기다려주세요.');
        } else {
          await updateDoc(userDocRef, { loginCount: (userData.loginCount || 0) + 1 });
          const loggedUser = { id: user.uid, ...userData, loginCount: (userData.loginCount || 0) + 1 };
          setCurrentUser(loggedUser);
          localStorage.setItem('savedUser', JSON.stringify(loggedUser));
          if (userData.role === 'student' && !userData.hasSeenTutorial) setTutorial({ show: true, role: 'student', step: 0 });
          else alertMessage(`환영합니다, ${userData.name} 님!`);
        }
      } else {
        // DB에 정보가 없는 완전 신규 유저
        setPendingGoogleUser(user);
        setShowRoleModal(true);
      }
    } catch (error: any) {
      console.error("구글 로그인 에러:", error);
      if (error.code === 'auth/popup-blocked') {
        alertMessage('팝업이 차단되었습니다. 브라우저 팝업 차단을 해제해 주세요.');
      } else if (error.code === 'auth/unauthorized-domain') {
        alertMessage('Firebase 콘솔에 접속 중인 웹 도메인을 추가해주세요.');
      } else if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
        alertMessage('구글 로그인 실패: ' + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleSelectionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pendingGoogleUser) return;
    if (googleRoleSelect === 'student' && (!googleAdmissionYear.trim() || !googleStudentNo.trim())) return alertMessage('입학 연도와 학번을 모두 입력해주세요.');
    if (googleRoleSelect === 'teacher' && adminSecret !== 'tlagkr1!') return alertMessage('관리자 인증 코드가 올바르지 않습니다.');
    
    setIsLoading(true);
    try {
      const userDocRef = doc(getColRef('users'), pendingGoogleUser.uid);
      if (googleRoleSelect === 'student') {
        const newStudentData: UserData = {
          id: pendingGoogleUser.uid,
          role: 'pending_student',
          admissionYear: googleAdmissionYear.trim(),
          studentNumber: googleStudentNo.trim(),
          name: pendingGoogleUser.displayName || '학생',
          username: pendingGoogleUser.email?.split('@')[0] || pendingGoogleUser.uid,
          joinDate: new Date().toISOString().split('T')[0],
          loginCount: 0,
          status: '승인대기',
          hasSeenTutorial: false
        };
        await setDoc(userDocRef, newStudentData);
        alertMessage(`✨ [${newStudentData.name}] 학생 가입 신청 완료! 선생님 승인 후 접속 가능합니다.`);
        await signOut(auth);
      } else {
        const newTeacherData: UserData = {
          id: pendingGoogleUser.uid,
          role: 'teacher',
          name: pendingGoogleUser.displayName || '선생님',
          username: pendingGoogleUser.email?.split('@')[0] || pendingGoogleUser.uid,
          joinDate: new Date().toISOString().split('T')[0],
          loginCount: 1,
          status: '활동중'
        };
        await setDoc(userDocRef, newTeacherData);
        alertMessage(`✨ 관리자 인증 완료! 교사로 즉시 가입 및 접속되었습니다.`);
        setCurrentUser(newTeacherData);
        localStorage.setItem('savedUser', JSON.stringify(newTeacherData));
      }
      setPendingGoogleUser(null);
      setShowRoleModal(false);
      setAdminSecret('');
      setGoogleAdmissionYear('');
      setGoogleStudentNo('');
    } catch(err: any) {
      alertMessage('등록 오류: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminLogin = () => {
    const pw = window.prompt('최고 관리자 비밀번호를 입력하세요.');
    if (pw === 'tlagkr1!') {
      localStorage.setItem('adminSession', 'true');
      setCurrentUser({ id: 'teacher_admin', name: '최고 관리자', role: 'teacher', username: 'admin' });
      alertMessage('최고 관리자 모드로 로그인했습니다.');
    } else if (pw !== null) {
      alertMessage('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      localStorage.removeItem('savedUser');
      localStorage.removeItem('adminSession');
      setCurrentUser(null); setStudentQuestionSearch(''); setSubmissionSearch(''); setTeacherQuestionSearch(''); setTeacherSubTab('content'); setViewingSubmission(null); setSelectedQuestion(null);
      alertMessage('안전하게 로그아웃되었습니다.');
    } catch (err) {} finally { setIsLoading(false); }
  };

  const completeTutorial = async () => {
    if (tutorial.role === 'student' && currentUser && currentUser.role === 'student') {
      await updateDoc(doc(getColRef('users'), currentUser.id), { hasSeenTutorial: true });
    }
    alertMessage('튜토리얼 완료!'); setTutorial({ show: false, role: '', step: 0 });
  };

  // 💡 통합된 계정 삭제 및 거절 관리 핸들러
  const handleDeleteUser = (userToDel: UserData, actionText: string) => {
    setConfirmModal({
      show: true, title: '계정 제어', message: `[${userToDel.name}] 님의 ${actionText}하시겠습니까?`, isDanger: true,
      onConfirm: async () => {
        setIsLoading(true);
        try { 
          await deleteDoc(doc(getColRef('users'), userToDel.id)); 
          alertMessage('정상적으로 처리되었습니다.'); 
        } 
        catch(err: any) { alertMessage('오류: ' + err.message); } 
        finally { setIsLoading(false); setConfirmModal({ show: false, title: '', message: '', onConfirm: null, isDanger: false }); }
      }
    });
  };

  const handleApproveStudent = async (student: UserData) => {
    setIsLoading(true);
    try { await updateDoc(doc(getColRef('users'), student.id), { role: 'student', status: '활동중' }); alertMessage('[' + student.name + '] 학생 가입 승인 완료!'); } 
    catch (err: any) { alertMessage('오류: ' + err.message); } finally { setIsLoading(false); }
  };

  const handleUpdateUserRole = async (userId: string, newRole: string) => {
    setIsLoading(true);
    try {
      await updateDoc(doc(getColRef('users'), userId), { role: newRole, status: newRole === 'pending_student' ? '승인대기' : '활동중' });
      alertMessage('회원 권한이 변경되었습니다.');
    } catch (err: any) { alertMessage('오류: ' + err.message); } finally { setIsLoading(false); }
  };

  const handleSaveRankingConfig = async () => {
    setIsLoading(true);
    try {
      await setDoc(doc(getColRef('settings'), 'rankingConfig'), rankingConfig);
      alertMessage('랭킹 집계 기간이 설정되었습니다.');
    } catch (err: any) { alertMessage('오류: ' + err.message); } finally { setIsLoading(false); }
  };

  const handleUpdateQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuestion) return;
    if (!editingQuestion.title.trim() || editingQuestion.tags.length === 0 || editingQuestion.items.length === 0) return alertMessage('타이틀, 해시태그, 이미지를 모두 입력해 주세요!');
    setIsLoading(true);
    try {
      const finalImageUrls: string[] = [];
      for (const item of editingQuestion.items) { if (item.file) finalImageUrls.push(await uploadToCloudinary(item.file)); else finalImageUrls.push(item.url); }
      await updateDoc(doc(getColRef('questions'), editingQuestion.id), { title: editingQuestion.title, tags: editingQuestion.tags, imageUrls: finalImageUrls, isPinned: editingQuestion.isPinned, isChallenge: editingQuestion.isChallenge });
      alertMessage('수정되었습니다! ✨'); setEditQuestionModal(false); setEditingQuestion(null);
    } catch (err: any) { alertMessage('수정 실패: ' + err.message); } finally { setIsLoading(false); }
  };

  const handleAddQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.title.trim() || newQuestion.tags.length === 0 || newQuestion.images.length === 0) return alertMessage('타이틀, 해시태그, 이미지를 등록해주세요!');
    setIsLoading(true);
    try {
      const uploadedImageUrls = [];
      for (const file of newQuestion.images) uploadedImageUrls.push(await uploadToCloudinary(file));
      await addDoc(getColRef('questions'), {
        title: newQuestion.title, tags: newQuestion.tags, imageUrls: uploadedImageUrls, createdAt: new Date().toISOString(), teacherName: currentUser?.name || '교사', teacherId: currentUser?.id || '', isPinned: newQuestion.isPinned, isChallenge: newQuestion.isChallenge, isStudentQuestion: false
      });
      alertMessage('문제가 등록되었습니다!'); setNewQuestion({ title: '', tags: [], currentTagInput: '', images: [], imagePreviews: [], isPinned: false, isChallenge: false });
    } catch (err: any) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const handleDeleteQuestionConfirm = (id: string) => {
    setConfirmModal({
      show: true, title: '문항 삭제', message: '이 기출문제를 삭제하시겠습니까?', isDanger: true,
      onConfirm: async () => {
        setIsLoading(true);
        try { await deleteDoc(doc(getColRef('questions'), id)); alertMessage('삭제되었습니다.'); } 
        catch(err: any) { alertMessage('오류: ' + err.message); } finally { setIsLoading(false); setConfirmModal({ show: false, title: '', message: '', onConfirm: null, isDanger: false }); }
      }
    });
  };

  const handleStudentAddQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (studentNewQuestion.tags.length === 0) return alertMessage('해시태그를 최소 1개 이상 필수로 입력해 주세요!');
    if (!studentNewQuestion.title.trim() || studentNewQuestion.images.length === 0) return alertMessage('질문 제목과 이미지를 모두 등록해주세요!');
    setIsLoading(true);
    try {
      const uploadedImageUrls = [];
      for (const file of studentNewQuestion.images) uploadedImageUrls.push(await uploadToCloudinary(file));
      await addDoc(getColRef('questions'), {
        title: studentNewQuestion.title, tags: studentNewQuestion.tags, imageUrls: uploadedImageUrls, createdAt: new Date().toISOString(), teacherName: currentUser?.name || '학생', teacherId: currentUser?.id || '', isPinned: false, isChallenge: studentNewQuestion.isShared, isStudentQuestion: true
      });
      alertMessage('질문이 성공적으로 등록되었습니다!'); setStudentNewQuestion({ title: '', tags: [], currentTagInput: '', images: [], imagePreviews: [], isShared: true }); setStudentQuestionModal(false);
    } catch (err: any) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const handleSubmitSolution = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentSolutionImage || !selectedQuestion || !currentUser) return alertMessage('풀이 이미지를 첨부해주세요!');
    setIsLoading(true);
    try {
      const downloadUrl = await uploadToCloudinary(studentSolutionImage);
      const existingSub = submissions.find(s => s.questionId === selectedQuestion.id && s.studentId === currentUser.id);

      if (existingSub) {
        const oldAttempts = existingSub.attempts || [{ imageUrl: existingSub.imageUrl, feedbackText: existingSub.feedbackText || '', feedbackImageUrl: existingSub.feedbackImageUrl || '', submittedAt: existingSub.submittedAt }];
        const newAttempt = { imageUrl: downloadUrl, submittedAt: new Date().toISOString(), feedbackText: '', feedbackImageUrl: '' };
        await updateDoc(doc(getColRef('submissions'), existingSub.id), { attempts: oldAttempts.concat(newAttempt), imageUrl: downloadUrl, status: '피드백 대기', feedbackText: '', feedbackImageUrl: '', submittedAt: new Date().toISOString() });
        alertMessage('풀이 회차가 추가되었습니다!');
      } else {
        await addDoc(getColRef('submissions'), {
          questionId: selectedQuestion.id, studentId: currentUser.id, studentName: currentUser.name, submittedAt: new Date().toISOString(), imageUrl: downloadUrl, status: '피드백 대기', feedbackImageUrl: '', feedbackText: '', feedbackAt: '', isShared: selectedQuestion.isChallenge ? isSharedChecked : false, peerComments: [], attempts: [{ imageUrl: downloadUrl, submittedAt: new Date().toISOString(), feedbackText: '', feedbackImageUrl: '' }]
        });
        alertMessage('성공적으로 제출되었습니다!');
      }
      setStudentSolutionImage(null); setStudentSolutionPreview(''); setSelectedQuestion(null); setIsEditingSolution(false);
    } catch (err: any) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const handleSaveFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentViewingSubmission || !activeFeedbackSubmissionId) return;
    if (!feedbackInputText.trim() && !feedbackInputImage) return alertMessage('코멘트나 첨삭 이미지를 넣어주세요.');
    setIsLoading(true);
    try {
      const attempts = currentViewingSubmission.attempts || [{ imageUrl: currentViewingSubmission.imageUrl, feedbackText: currentViewingSubmission.feedbackText, feedbackImageUrl: currentViewingSubmission.feedbackImageUrl, submittedAt: currentViewingSubmission.submittedAt }];
      let finalFeedbackUrl = attempts[selectedAttemptIdx]?.feedbackImageUrl || '';
      if (feedbackInputImage) finalFeedbackUrl = await uploadToCloudinary(feedbackInputImage);
      attempts[selectedAttemptIdx].feedbackText = feedbackInputText; attempts[selectedAttemptIdx].feedbackImageUrl = finalFeedbackUrl; attempts[selectedAttemptIdx].feedbackAt = new Date().toISOString();
      let topUpdates = {};
      if (selectedAttemptIdx === attempts.length - 1) topUpdates = { feedbackText: feedbackInputText, feedbackImageUrl: finalFeedbackUrl, feedbackAt: attempts[selectedAttemptIdx].feedbackAt, status: '피드백 완료' };
      await updateDoc(doc(getColRef('submissions'), activeFeedbackSubmissionId), { attempts: attempts, ...topUpdates });
      alertMessage('첨삭 피드백 전송 완료!'); setViewingSubmission(null); setSelectedQuestion(null); setActiveFeedbackSubmissionId(null); setFeedbackInputText(''); setFeedbackInputImage(null); setFeedbackInputImagePreview('');
    } catch (err: any) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const handleSaveQuestionFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuestion) return;
    if (!feedbackInputText.trim() && !feedbackInputImage) return alertMessage('코멘트나 첨삭 이미지를 넣어주세요.');
    setIsLoading(true);
    try {
      let finalFeedbackUrl = selectedQuestion.feedbackImageUrl || '';
      if (feedbackInputImage) finalFeedbackUrl = await uploadToCloudinary(feedbackInputImage);
      await updateDoc(doc(getColRef('questions'), selectedQuestion.id), { feedbackText: feedbackInputText, feedbackImageUrl: finalFeedbackUrl, feedbackAt: new Date().toISOString(), status: '답 완료' });
      alertMessage('질문에 대한 코칭 답변이 전송되었습니다!');
      setFeedbackInputText(''); setFeedbackInputImage(null); setFeedbackInputImagePreview(''); setSelectedQuestion(null);
    } catch (err: any) { alertMessage('답변 전송 실패: ' + err.message); } finally { setIsLoading(false); }
  };

  const handlePeerCommentSubmit = async (e: React.FormEvent, targetSubId: string) => {
    e.preventDefault();
    if (!currentUser || (!peerCommentInput.trim() && !peerCommentImage)) return; 
    setIsLoading(true);
    try {
      let imgUrl = ''; if (peerCommentImage) imgUrl = await uploadToCloudinary(peerCommentImage);
      const targetSub = submissions.find(s => s.id === targetSubId);
      const newComment = { id: `c-${Date.now()}`, authorName: currentUser.name, text: peerCommentInput, imageUrl: imgUrl, createdAt: new Date().toISOString() };
      await updateDoc(doc(getColRef('submissions'), targetSubId), { peerComments: (targetSub?.peerComments || []).concat(newComment) });
      setPeerCommentInput(''); setPeerCommentImage(null); setPeerCommentImagePreview(''); alertMessage('답글 등록 완료!');
    } catch (err: any) { alertMessage(err.message); } finally { setIsLoading(false); }
  };

  const dashboardItems = submissions.map(s => ({ ...s, type: 'SOLVE' as const, time: s.submittedAt }))
    .concat(questions.filter(q => q.isStudentQuestion).map(q => ({ id: q.id, questionId: q.id, studentName: q.teacherName, studentId: q.teacherId, status: q.status || '답변 대기', type: 'ASK' as const, time: q.createdAt, title: q.title })))
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  // 💡 전문가급 실시간 다차원 검색 필터링 구현
  const filteredDashboardItems = dashboardItems.filter(item => {
    const query = submissionSearch.trim().toLowerCase();
    if (!query) return true;
    const cleanQuery = query.startsWith('#') ? query.slice(1) : query;
    const matchedQuestion = questions.find(q => q.id === item.questionId);
    const nameMatch = item.studentName?.toLowerCase().includes(cleanQuery);
    const titleMatch = (item.title || matchedQuestion?.title || '').toLowerCase().includes(cleanQuery);
    const statusMatch = item.status?.toLowerCase().includes(cleanQuery);
    const typeMatch = (item.type === 'ASK' ? 'question 질문' : 'solution solve 풀이 제출').toLowerCase().includes(cleanQuery);
    const tagsMatch = matchedQuestion?.tags?.some(tag => tag.toLowerCase().includes(cleanQuery)) || false;
    return nameMatch || titleMatch || statusMatch || typeMatch || tagsMatch;
  });

  const handleOpenQuestion = (qId: string) => {
    const target = questions.find(q => q.id === qId);
    if (!target) return setConfirmModal({ show: true, title: '접근 불가 문항', message: '이미 삭제되었거나 존재하지 않는 문항입니다.', isDanger: true, onConfirm: () => setConfirmModal(p => ({ ...p, show: false })) });
    setSelectedQuestion(target);
    if (currentUser?.role === 'teacher' && target.isStudentQuestion) {
      setFeedbackInputText(target.feedbackText || '');
      setFeedbackInputImagePreview(target.feedbackImageUrl || '');
      setFeedbackInputImage(null);
    }
  };

  const openEditQuestionModal = (q: Question) => {
    setEditingQuestion({
      id: q.id, title: q.title, tags: q.tags, currentTagInput: '', isPinned: q.isPinned, isChallenge: q.isChallenge, isStudentQuestion: q.isStudentQuestion, items: q.imageUrls.map(url => ({ url }))
    });
    setEditQuestionModal(true);
  };

  const isWithinRankingPeriod = (dateString?: string) => {
    if (!dateString) return false;
    if (!rankingConfig.startDate && !rankingConfig.endDate) return true;
    const d = new Date(dateString).getTime();
    const start = rankingConfig.startDate ? new Date(rankingConfig.startDate).getTime() : 0;
    const end = rankingConfig.endDate ? new Date(rankingConfig.endDate).getTime() + 86399999 : Infinity;
    return d >= start && d <= end;
  };

  const rankingData = students.map(student => {
    const subCount = submissions.filter(s => s.studentId === student.id && isWithinRankingPeriod(s.submittedAt)).length;
    const askCount = questions.filter(q => q.teacherId === student.id && q.isStudentQuestion && isWithinRankingPeriod(q.createdAt)).length;
    let replyCount = 0;
    submissions.forEach(s => { if (s.peerComments) replyCount += s.peerComments.filter(c => c.authorName === student.name && isWithinRankingPeriod(c.createdAt)).length; });
    return { ...student, totalScore: (subCount * 10) + (askCount * 5) + (replyCount * 3), mySubmissionsCount: subCount, myQuestionsCount: askCount, myCommentsCount: replyCount };
  }).filter(s => s.totalScore > 0).sort((a, b) => b.totalScore - a.totalScore).slice(0, 5);

  const filteredStudentQuestions = questions.filter(q => {
    const query = studentQuestionSearch.trim().toLowerCase();
    let matchQuery = true;
    if (query) {
      const cln = query.startsWith('#') ? query.slice(1) : query;
      matchQuery = q.title.toLowerCase().includes(cln) || q.tags.some(tag => tag.toLowerCase().includes(cln)) || q.teacherName.toLowerCase().includes(cln);
    }
    if (activeTab === 'my' && currentUser) {
      const solvedIds = submissions.filter(s => s.studentId === currentUser.id).map(s => s.questionId);
      return solvedIds.includes(q.id) && matchQuery;
    }
    return matchQuery;
  });

  const pinnedQuestions = filteredStudentQuestions.filter(q => q.isPinned);
  const regularQuestions = filteredStudentQuestions.filter(q => !q.isPinned);
  const filteredTeacherQuestions = questions.filter(q => { const c = teacherQuestionSearch.trim().toLowerCase(); return !c || q.title.toLowerCase().includes(c) || q.tags.some(t => t.toLowerCase().includes(c)); });
  const pendingStudents = allUsers.filter(u => u.role === 'pending_student');
  const approvedMembers = allUsers.filter(u => u.role === 'student' || u.role === 'teacher').filter(u => u.id !== 'teacher_admin');

  function renderQuestionCard(q: Question, isHighlight: boolean) {
    const isSolved = currentUser?.role === 'student' && submissions.some(s => s.questionId === q.id && s.studentId === currentUser.id);
    return (
      <div key={q.id} onClick={() => handleOpenQuestion(q.id)} className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group flex flex-col h-full ${isHighlight ? 'border-amber-300 ring-4 ring-amber-500/10 shadow-lg' : 'border-slate-200 shadow-sm'}`}>
        <div className="relative h-44 bg-slate-100 overflow-hidden shrink-0">
          <img src={q.imageUrls[0]} alt={q.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="bg-white/95 text-slate-900 px-4 py-2 rounded-xl text-xs font-black shadow flex items-center gap-1.5"><Eye size={14} /> 풀기 및 확인</span>
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

  if (isAuthLoading) return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
      <Loader2 className="text-white animate-spin mb-4" size={48} />
      <p className="text-indigo-200 font-bold animate-pulse">학습 기록을 불러오는 중입니다...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col relative select-none">
      <style>{`
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 9999px; border: 2px solid transparent; background-clip: padding-box; }
        ::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }
        * { scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent; }
      `}</style>

      {/* 💡 무한 로딩 방지 및 취소 버튼이 적용된 전역 로더 */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex flex-col items-center justify-center z-[200]">
          <Loader2 className="text-white animate-spin mb-3" size={48} />
          <p className="text-white font-bold text-sm tracking-widest animate-pulse">처리 중입니다...</p>
          <button onClick={() => setIsLoading(false)} className="mt-8 px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-xs font-bold backdrop-blur transition-colors shadow-sm">
            취소 / 닫기
          </button>
        </div>
      )}

      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white"><BookOpen size={24} /></div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">문제 풀이 아카이브</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleInstallApp} className="text-slate-500 hover:text-indigo-600 flex items-center gap-1 text-xs font-bold bg-slate-100 px-3 py-2 rounded-xl transition-colors shadow-sm"><Download size={14} /> <span className="hidden sm:inline">앱 설치</span></button>
            <button onClick={() => setTutorial({ show: true, role: currentUser?.role || 'student', step: 0 })} className="text-slate-500 hover:text-indigo-600 flex items-center gap-1 text-xs font-bold bg-slate-100 px-3 py-2 rounded-xl transition-colors shadow-sm"><Sparkles size={14} /> <span className="hidden sm:inline">가이드</span></button>
            
            {/* 💡 100% 구글 로그인 전용 버튼 */}
            {!currentUser ? (
              <button onClick={handleGoogleLogin} className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5 transition-colors">
                <GoogleIcon /> 구글로 시작하기
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full"><span className={`w-2.5 h-2.5 rounded-full ${currentUser.role === 'teacher' ? 'bg-emerald-500' : 'bg-indigo-500'}`}></span><span className="text-xs font-bold text-slate-700">{currentUser.name} 님</span></div>
                <button onClick={handleLogout} className="text-slate-500 hover:text-red-600"><LogOut size={14} /></button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {currentUser?.role === 'teacher' ? (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white border border-slate-200 p-2 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex gap-2">
                <button onClick={() => setTeacherSubTab('content')} className={`px-5 py-2.5 rounded-xl text-sm font-extrabold flex items-center gap-2 transition-all ${teacherSubTab === 'content' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}><FileText size={18} /> 기출/현황 관리</button>
                <button onClick={() => setTeacherSubTab('members')} className={`px-5 py-2.5 rounded-xl text-sm font-extrabold flex items-center gap-2 transition-all ${teacherSubTab === 'members' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}><Users size={18} /> 학급 관리 <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">{students.length}</span></button>
              </div>
            </div>

            {teacherSubTab === 'content' && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2"><Award className="text-amber-500" size={24}/> 이달의 열공 랭킹 🏆</h3>
                  <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-600">집계 기간:</span>
                    <input type="date" value={rankingConfig.startDate} onChange={e => setRankingConfig({...rankingConfig, startDate: e.target.value})} className="text-xs p-1.5 rounded-lg border border-slate-300 bg-white" />
                    <span className="text-slate-400">~</span>
                    <input type="date" value={rankingConfig.endDate} onChange={e => setRankingConfig({...rankingConfig, endDate: e.target.value})} className="text-xs p-1.5 rounded-lg border border-slate-300 bg-white" />
                    <button onClick={handleSaveRankingConfig} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-lg font-bold transition-colors">저장</button>
                  </div>
                </div>
                {rankingData.length > 0 ? (
                  <div className="flex gap-4 overflow-x-auto pb-4 pt-4 px-2 scrollbar-thin">
                    {rankingData.map((student, idx) => (
                      <div key={student.id} className="min-w-[155px] flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-xl relative hover:border-amber-300 transition-colors">
                        {idx === 0 && <span className="absolute -top-2 bg-amber-400 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">1위 🥇</span>}
                        {idx === 1 && <span className="absolute -top-2 bg-slate-300 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">2위 🥈</span>}
                        {idx === 2 && <span className="absolute -top-2 bg-amber-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">3위 🥉</span>}
                        {idx > 2 && <span className="absolute -top-2 bg-slate-200 text-slate-600 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">{idx + 1}위</span>}
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2 mt-1 shadow-inner"><span className="text-lg font-bold text-indigo-600">{anonymizeName(student.name)[0]}</span></div>
                        <span className="font-bold text-slate-800 text-sm">{anonymizeName(student.name)}</span>
                        <span className="text-xs font-black text-indigo-600 mt-1">{student.totalScore}점</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-slate-400 font-bold text-sm">해당 기간 내 집계된 활동 랭킹이 없습니다.</div>
                )}
              </div>
            )}

            {teacherSubTab === 'content' ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-fit">
                  <h3 className="font-bold text-lg text-slate-900 mb-5 flex items-center gap-2 border-b pb-3"><Upload className="text-emerald-600"/> 문제 세트 등록</h3>
                  <form onSubmit={handleAddQuestion} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">문제 타이틀</label>
                      <input type="text" value={newQuestion.title} onChange={e => setNewQuestion({...newQuestion, title: e.target.value})} className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">해시태그 (입력 후 Space/Enter)</label>
                      <div className="flex flex-wrap gap-2 p-2 border border-slate-300 bg-white rounded-lg focus-within:ring-2 focus-within:ring-emerald-500">
                        {newQuestion.tags.map(tag => <span key={tag} className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">#{tag} <button type="button" onClick={()=>removeTag(tag)}>✕</button></span>)}
                        <input type="text" value={newQuestion.currentTagInput} onChange={e => setNewQuestion({...newQuestion, currentTagInput: e.target.value})} onKeyDown={handleTagKeyDown} className="flex-1 outline-none text-sm min-w-[100px] bg-transparent text-slate-900 placeholder-slate-400" placeholder="태그 추가..." />
                      </div>
                    </div>
                    <div className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={newQuestion.isPinned} onChange={e => setNewQuestion({...newQuestion, isPinned: e.target.checked})} className="rounded text-emerald-600"/> <span className="text-xs font-bold text-slate-700">상단 고정</span></label>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={newQuestion.isChallenge} onChange={e => setNewQuestion({...newQuestion, isChallenge: e.target.checked})} className="rounded text-indigo-600"/> <span className="text-xs font-bold text-slate-700">공개 챌린지</span></label>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">이미지 업로드 (Ctrl+V)</label>
                      <div onDragOver={handleDropQuestion} onDrop={handleDropQuestion} className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
                        {newQuestion.imagePreviews.length > 0 ? (
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            {newQuestion.imagePreviews.map((preview, idx) => (
                              <div key={idx} className="relative group border border-slate-200 shadow-sm rounded-lg overflow-hidden bg-white"><img src={preview} className="h-20 w-full object-cover rounded cursor-zoom-in" onClick={()=>openLightbox(preview, '미리보기')}/><button type="button" onClick={()=>removeQuestionPreview(idx)} className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white p-0.5 rounded-full"><X size={12}/></button></div>
                            ))}
                            <label className="flex flex-col items-center justify-center border-2 border-dashed border-emerald-300 rounded-lg hover:bg-emerald-50 cursor-pointer min-h-[5rem] transition-colors"><Plus size={20} className="text-emerald-500" /><span className="text-[10px] font-bold text-emerald-600">추가</span><input type="file" multiple accept="image/*" onChange={handleQuestionImageChange} className="hidden" /></label>
                          </div>
                        ) : (
                          <label className="cursor-pointer block py-4 hover:bg-slate-100 rounded-xl transition-colors"><ImageIcon className="mx-auto text-slate-400 mb-2" size={24}/><span className="text-xs font-bold text-emerald-600">클릭 또는 이미지 붙여넣기</span><input type="file" multiple accept="image/*" onChange={handleQuestionImageChange} className="hidden" /></label>
                        )}
                      </div>
                    </div>
                    <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"><Plus size={16}/> 등록하기</button>
                  </form>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center justify-between">
                      <span>등록된 기출/질문 세트</span>
                      <div className="relative max-w-[180px] w-full">
                        <Search className="absolute left-2.5 top-2 text-slate-400" size={14}/>
                        <input type="text" value={teacherQuestionSearch} onChange={e => setTeacherQuestionSearch(e.target.value)} placeholder="제목, #태그 검색" className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500" />
                      </div>
                    </h3>
                    <div className="divide-y divide-slate-100 max-h-[250px] overflow-y-auto pr-1">
                      {filteredTeacherQuestions.length === 0 ? (
                        <div className="text-center py-8 text-slate-400 text-xs font-bold">검색 결과가 없습니다.</div>
                      ) : (
                        filteredTeacherQuestions.map(q => (
                          <div key={q.id} className="py-2.5 flex items-center justify-between hover:bg-slate-50 px-2 rounded-lg transition-colors">
                            <div className="flex items-center gap-3">
                              <img src={q.imageUrls[0]} className="w-10 h-10 object-cover rounded border border-slate-200 shadow-sm cursor-zoom-in" onClick={()=>handleOpenQuestion(q.id)}/>
                              <div>
                                <div className="flex gap-1 mb-0.5">
                                  {q.isPinned && <span className="text-[8px] bg-amber-100 text-amber-700 px-1 rounded font-bold">고정</span>}
                                  {q.isChallenge && <span className="text-[8px] bg-indigo-100 text-indigo-700 px-1 rounded font-bold">챌린지</span>}
                                  {q.tags.includes('질문있어요') && <span className="text-[8px] bg-amber-500 text-white px-1 rounded font-bold flex items-center gap-0.5"><MessageCircle size={8}/>질문</span>}
                                  {q.imageUrls.length > 1 && <span className="text-[8px] bg-slate-100 text-slate-600 px-1 rounded font-bold border">{q.imageUrls.length}장</span>}
                                </div>
                                <h4 className="text-xs font-bold hover:underline cursor-pointer text-slate-800" onClick={()=>handleOpenQuestion(q.id)}>{q.title}</h4>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <button onClick={() => openEditQuestionModal(q)} className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors" title="수정하기"><Edit size={16}/></button>
                              <button onClick={()=>handleDeleteQuestionConfirm(q.id)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors" title="삭제하기"><Trash2 size={16}/></button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center justify-between">
                      <span>🚀 실시간 활동 모니터링 센터</span>
                      <div className="flex items-center gap-2">
                        <span className="bg-indigo-100 text-indigo-700 text-xs px-2.5 py-0.5 rounded-full font-bold">Total: {filteredDashboardItems.length}</span>
                        <input type="text" value={submissionSearch} onChange={e=>setSubmissionSearch(e.target.value)} placeholder="학생명, 검색" className="px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none w-28 md:w-36 shadow-inner font-semibold" />
                      </div>
                    </h3>
                    <div className="overflow-x-auto border border-slate-200 rounded-xl">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 border-b border-slate-200">
                          <tr><th className="p-3 font-bold text-slate-600">활동</th><th className="p-3 font-bold text-slate-600">학생명</th><th className="p-3 font-bold text-slate-600">문항/질문 제목</th><th className="p-3 text-center font-bold text-slate-600">시간</th><th className="p-3 text-right font-bold text-slate-600">코칭</th></tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {filteredDashboardItems.map(item => {
                            const matchedQuestion = questions.find(q => q.id === item.questionId);
                            return (
                              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                <td className="p-3 flex flex-col sm:flex-row items-start sm:items-center gap-1.5">
                                  <span className={`px-2 py-0.5 rounded-md font-black text-[9px] shadow-sm ${item.type === 'ASK' ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'}`}>{item.type === 'ASK' ? 'QUESTION' : 'SOLUTION'}</span>
                                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border shadow-sm ${item.status === '답변 완료' || item.status === '피드백 완료' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>{item.status}</span>
                                </td>
                                <td className="p-3 font-bold text-slate-800">{item.studentName}</td>
                                <td className="p-3 truncate max-w-[150px] font-medium">{item.title || matchedQuestion?.title || '삭제된 문항'}</td>
                                <td className="p-3 text-center font-mono text-[10px] text-slate-500">{formatDateTime(item.time)}</td>
                                <td className="p-3 text-right"><button onClick={() => { if (item.type === 'ASK') handleOpenQuestion(item.id); else { setViewingSubmission(item as Submission); handleOpenQuestion(item.questionId); } }} className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-lg text-[10px] font-bold transition-all shadow-sm">코칭 가기</button></td>
                              </tr>
                            );
                          })}
                          {filteredDashboardItems.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-slate-400 font-bold">진행된 활동이 없습니다.</td></tr>}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
                
                {/* 💡 학생 대기방 */}
                {pendingStudents.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-extrabold text-lg text-slate-900 mb-4 flex items-center gap-2"><Sparkles className="text-amber-500" size={20}/> 학생 승인 대기방</h3>
                    <div className="overflow-x-auto border border-slate-200 rounded-xl bg-slate-50/50 mb-6">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-indigo-50 border-b border-slate-200 text-indigo-900">
                          <tr><th className="p-3 font-bold">입학년도/학번</th><th className="p-3 font-bold">이름</th><th className="p-3 font-bold">구글 이메일</th><th className="p-3 text-right font-bold">승인 제어</th></tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                          {pendingStudents.map(ps => (
                            <tr key={ps.id} className="hover:bg-indigo-50/30 transition-colors">
                              <td className="p-3 font-mono">{ps.admissionYear || '-'} / {ps.studentNumber}</td><td className="p-3 font-bold">{ps.name}</td><td className="p-3 font-mono">{ps.username}</td>
                              <td className="p-3 text-right space-x-2">
                                <button onClick={() => handleApproveStudent(ps)} className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-colors shadow-sm">가입 승인</button>
                                <button onClick={() => handleDeleteUser(ps, '가입 신청을 거절')} className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 rounded-lg text-xs font-bold transition-colors">거절/삭제</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center"><h3 className="font-bold text-lg text-slate-900">가입 승인된 회원(학생/교사) 목록</h3><span className="bg-indigo-100 text-indigo-700 text-xs px-2.5 py-0.5 rounded-full font-bold">총 {approvedMembers.length}명</span></div>
                <div className="overflow-x-auto border border-slate-200 rounded-xl mb-8">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200"><tr><th className="p-3.5 font-bold text-slate-600">권한</th><th className="p-3.5 font-bold text-slate-600">입학/학번</th><th className="p-3.5 font-bold text-slate-600">이름</th><th className="p-3.5 font-bold text-slate-600">이메일 ID</th><th className="p-3.5 text-center font-bold text-slate-600">방문</th><th className="p-3.5 text-right font-bold text-slate-600">계정 제어</th></tr></thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {approvedMembers.map(member => (
                        <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5">
                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${member.role === 'teacher' ? 'bg-emerald-100 text-emerald-800' : 'bg-indigo-100 text-indigo-800'}`}>
                              {member.role === 'teacher' ? '교사' : '학생'}
                            </span>
                          </td>
                          <td className="p-3.5 font-mono text-slate-500">{member.role === 'teacher' ? '-' : `${member.admissionYear || ''} / ${member.studentNumber}`}</td><td className="p-3.5 font-bold">{member.name}</td><td className="p-3.5 font-mono">{member.username}</td>
                          <td className="p-3.5 text-center"><span className="bg-slate-100 text-slate-600 text-[10px] px-2.5 py-1 rounded-md font-bold">{member.loginCount}회</span></td>
                          <td className="p-3.5 text-right flex justify-end items-center gap-2">
                            <select 
                              value={member.role} 
                              onChange={(e) => handleUpdateUserRole(member.id, e.target.value)}
                              className="px-2 py-1.5 text-xs border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700"
                            >
                              <option value="student">학생으로 유지</option>
                              <option value="teacher">교사로 지정</option>
                              <option value="pending_student">승인 대기로 강등</option>
                            </select>
                            <button onClick={()=>handleDeleteUser(member, '계정을 완전히 삭제')} className="px-3 py-1.5 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 rounded-lg text-xs font-bold transition-colors">삭제</button>
                          </td>
                        </tr>
                      ))}
                      {approvedMembers.length === 0 && <tr><td colSpan={6} className="p-8 text-center text-slate-400 font-bold">등록된 회원이 없습니다.</td></tr>}
                    </tbody>
                  </table>
                </div>

              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in font-sans">
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-start gap-6 relative overflow-hidden">
              <div className="space-y-3 z-10 relative">
                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-amber-200"><Sparkles size={12}/> 실시간 첨삭 및 챌린지 오답방</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">문제 풀이 역량 향상 시스템<br/>선생님과 친구들이 함께하는 코칭 플랫폼</h2>
              </div>
              {!currentUser && (
                <div className="bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/20 text-center shrink-0 w-full md:w-auto z-10">
                  <p className="text-sm font-extrabold text-white mb-3">구글 계정으로 1초 만에 시작하세요</p>
                  <button onClick={handleGoogleLogin} className="w-full py-3.5 px-6 bg-white hover:bg-slate-50 text-indigo-700 border-2 border-transparent hover:border-indigo-200 rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-xl active:scale-[0.98]">
                    <GoogleIcon /> 구글 계정으로 시작
                  </button>
                </div>
              )}
            </div>

            {/* 💡 개편된 레이아웃: 문제 검색창과 리스트가 연속되게 배치하고 랭킹을 사이드바로 압축 */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* 왼쪽 메인 영역: 검색창 및 문제 리스트 */}
              <div className="flex-1 w-full space-y-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-4">
                  <div className="relative w-full flex-1">
                    <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
                    <input type="text" value={studentQuestionSearch} onChange={e => setStudentQuestionSearch(e.target.value)} placeholder="과목, 단원 등 해시태그 검색..." className="w-full pl-9 pr-8 py-2 text-sm rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none" />
                  </div>
                  {currentUser?.role === 'student' && (
                    <div className="flex gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
                      <button onClick={() => setActiveTab('all')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}>전체 탐색</button>
                      <button onClick={() => setActiveTab('my')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'my' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}>내 오답노트</button>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                  {activeTab === 'all' && pinnedQuestions.length > 0 && (
                    <div>
                      <h3 className="font-extrabold text-lg flex items-center gap-2 mb-4 pl-2"><Pin className="text-amber-500 fill-amber-500" size={20}/> 공지 및 챌린지</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {pinnedQuestions.map(q => renderQuestionCard(q, true))}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="flex justify-between items-center mb-4 pl-2">
                      <h3 className="font-extrabold text-lg flex items-center gap-2"><BookOpen className="text-indigo-600" size={20}/> 전체 아카이브</h3>
                      {currentUser?.role === 'student' && (
                        <button onClick={() => setStudentQuestionModal(true)} className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-md transition-colors"><Sparkles size={14} className="inline mr-1"/> 나도 질문하기</button>
                      )}
                    </div>
                    {regularQuestions.length === 0 ? (
                      <div className="text-center py-20 text-slate-400 font-bold bg-white rounded-2xl border shadow-sm flex flex-col items-center gap-3"><Search size={40} className="opacity-20"/> <p>결과가 없습니다.</p></div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {regularQuestions.map(q => renderQuestionCard(q, false))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 오른쪽 사이드바 영역: 이달의 열공 랭킹 컴팩트 리스트화 */}
              {activeTab === 'all' && rankingData.length > 0 && (
                <div className="w-full lg:w-72 xl:w-80 shrink-0">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 sticky top-20">
                    <h3 className="font-extrabold text-base text-slate-900 mb-4 flex items-center gap-2"><Award className="text-amber-500" size={20}/> 이달의 열공 랭킹</h3>
                    <div className="flex flex-col gap-2.5">
                      {rankingData.map((student, idx) => (
                        <div key={student.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 transition-colors shadow-sm">
                          <div className="relative flex-shrink-0 flex items-center justify-center w-8 h-8">
                            {idx === 0 && <span className="absolute inset-0 bg-amber-400 rounded-full shadow-inner"></span>}
                            {idx === 1 && <span className="absolute inset-0 bg-slate-300 rounded-full shadow-inner"></span>}
                            {idx === 2 && <span className="absolute inset-0 bg-amber-600 rounded-full shadow-inner"></span>}
                            {idx > 2 && <span className="absolute inset-0 bg-slate-200 rounded-full shadow-inner"></span>}
                            <span className={`relative z-10 text-[11px] font-black ${idx <= 2 ? 'text-white' : 'text-slate-500'}`}>{idx + 1}위</span>
                          </div>
                          <div className="flex-1 min-w-0 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600 text-[10px] shrink-0">{anonymizeName(student.name)[0]}</div>
                              <span className="font-bold text-slate-800 text-sm truncate">{anonymizeName(student.name)}</span>
                            </div>
                            <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">{student.totalScore}점</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-auto py-8 text-center border-t border-slate-200 flex flex-col items-center gap-2">
        <p className="text-xs font-bold text-slate-400">ⓒ 2026 Archive Learning Platform.</p>
        {!currentUser && (
          <button onClick={handleAdminLogin} className="text-slate-300 hover:text-slate-500 transition-colors p-1" title="관리자 시스템 접속">
            <Lock size={14} />
          </button>
        )}
      </footer>

      {/* ==============================================
          💡 모든 전역 모달 UI를 렌더링 최하단에 안전하게 배치 
      ============================================== */}

      {/* 1. 인증(Auth) 역할 선택 모달 */}
      {showRoleModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-[200]">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl animate-in zoom-in-95 border border-slate-200">
            <div className="flex justify-between items-center mb-5 border-b pb-3">
              <h3 className="font-extrabold text-lg text-slate-900">
                구글 연동 완료 🎉
              </h3>
              <button onClick={() => setShowRoleModal(false)} className="text-slate-400 hover:bg-slate-100 p-1.5 rounded-full transition-colors"><X size={18}/></button>
            </div>
            
            <form onSubmit={handleRoleSelectionSubmit} className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mb-4 text-center">
                <p className="text-sm font-bold text-indigo-900">아카이브에서 사용할 역할을 선택해 주세요.</p>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setGoogleRoleSelect('student')} className={`flex-1 py-3 rounded-xl font-bold text-sm border-2 transition-all ${googleRoleSelect === 'student' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'}`}>👨‍🎓 학생</button>
                <button type="button" onClick={() => setGoogleRoleSelect('teacher')} className={`flex-1 py-3 rounded-xl font-bold text-sm border-2 transition-all ${googleRoleSelect === 'teacher' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'}`}>🧑‍🏫 선생님</button>
              </div>
              
              {googleRoleSelect === 'student' && (
                <div className="animate-fade-in mt-3 space-y-3">
                  <input type="number" value={googleAdmissionYear} onChange={e=>setGoogleAdmissionYear(e.target.value)} className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="입학 연도 (예: 2024)" required/>
                  <input type="text" value={googleStudentNo} onChange={e=>setGoogleStudentNo(e.target.value)} className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="학번을 입력해주세요 (예: 30101)" required/>
                </div>
              )}
              
              {/* 💡 관리자 자동 승인용 시크릿 코드 입력란 (교사 선택 시 필수 입력) */}
              {googleRoleSelect === 'teacher' && (
                <div className="animate-fade-in mt-3">
                  <input type="password" value={adminSecret} onChange={e=>setAdminSecret(e.target.value)} className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500" placeholder="관리자 인증 코드 (필수 입력)" required/>
                </div>
              )}

              <button type="submit" className={`w-full py-3.5 text-white font-bold rounded-xl mt-4 transition-colors shadow-md ${googleRoleSelect === 'teacher' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}>{googleRoleSelect === 'teacher' ? '관리자 인증 및 바로 접속' : '가입 승인 신청하기'}</button>
            </form>
          </div>
        </div>
      )}

      {/* 2. 학생 질문 추가 모달 */}
      {studentQuestionModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-[150]">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 border border-slate-200">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="font-extrabold text-lg flex items-center gap-2 text-slate-900"><Sparkles className="text-amber-500"/> 질문하기</h3>
              <button onClick={() => setStudentQuestionModal(false)} className="text-slate-400 hover:bg-slate-100 p-1.5 rounded-full transition-colors"><X size={18}/></button>
            </div>
            <form onSubmit={handleStudentAddQuestion} className="space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1 text-slate-600">질문 제목</label>
                <input type="text" value={studentNewQuestion.title} onChange={e => setStudentNewQuestion({...studentNewQuestion, title: e.target.value})} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="예: 2024 수능 22번 모르겠어요" required />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1 text-amber-600">필수 해시태그 (단원명 등 1개 이상 필수)</label>
                <div className="flex flex-wrap gap-2 p-2 border border-slate-300 bg-white rounded-xl focus-within:ring-2 focus-within:ring-amber-500 transition-shadow">
                  {studentNewQuestion.tags.map((tag) => (
                    <span key={tag} className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-200 shadow-sm">#{tag} <button type="button" onClick={() => setStudentNewQuestion({ ...studentNewQuestion, tags: studentNewQuestion.tags.filter(t => t !== tag) })} className="hover:text-red-500">✕</button></span>
                  ))}
                  <input type="text" value={studentNewQuestion.currentTagInput} onChange={e => setStudentNewQuestion({ ...studentNewQuestion, currentTagInput: e.target.value })} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const val = studentNewQuestion.currentTagInput.trim().replace(/^#/, ''); if (val && !studentNewQuestion.tags.includes(val)) { setStudentNewQuestion({ ...studentNewQuestion, tags: studentNewQuestion.tags.concat(val), currentTagInput: '' }); } } }} className="flex-1 outline-none text-xs min-w-[100px] bg-transparent text-slate-900 placeholder-slate-400" placeholder="입력 후 Space..." />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold mb-1 text-slate-600">문제 이미지 (Ctrl+V)</label>
                <div className="border-2 border-dashed border-amber-200 rounded-xl p-4 text-center bg-amber-50/30 hover:bg-amber-50/60 transition-colors">
                  {studentNewQuestion.imagePreviews.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {studentNewQuestion.imagePreviews.map((preview, idx) => (
                        <div key={idx} className="relative border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm"><img src={preview} className="h-20 w-full object-cover"/><button type="button" onClick={() => setStudentNewQuestion(p => ({...p, images: p.images.filter((_, i)=>i!==idx), imagePreviews: p.imagePreviews.filter((_, i)=>i!==idx)}))} className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white p-0.5 rounded-full shadow-md"><X size={12}/></button></div>
                      ))}
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-amber-300 rounded-lg hover:bg-amber-100 cursor-pointer min-h-[5rem] transition-colors"><Plus size={20} className="text-amber-500" /><input type="file" multiple accept="image/*" onChange={(e)=>{const f=e.target.files?Array.from(e.target.files):[]; if(f.length>0)setStudentNewQuestion(p=>({...p, images: p.images.concat(f), imagePreviews: p.imagePreviews.concat(f.map(file=>URL.createObjectURL(file)))}));}} className="hidden" /></label>
                    </div>
                  ) : (
                    <label className="cursor-pointer block py-4"><Upload className="mx-auto text-amber-500 mb-2" size={24}/><span className="text-xs font-bold text-amber-600 block">클릭 또는 이미지 복사/붙여넣기</span><input type="file" multiple accept="image/*" onChange={(e)=>{const f=e.target.files?Array.from(e.target.files):[]; if(f.length>0)setStudentNewQuestion(p=>({...p, images: p.images.concat(f), imagePreviews: p.imagePreviews.concat(f.map(file=>URL.createObjectURL(file)))}));}} className="hidden" /></label>
                  )}
                </div>
              </div>
              <label className="flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-100 cursor-pointer hover:bg-amber-100/50 transition-colors">
                <input type="checkbox" checked={studentNewQuestion.isShared} onChange={e => setStudentNewQuestion({...studentNewQuestion, isShared: e.target.checked})} className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"/>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-amber-900">다른 학생들에게 질문 공개하기</span>
                  <span className="text-[10px] font-semibold text-amber-700 mt-1">체크 시, 친구들이 질문에 대해 이미지로 답변을 달아줄 수 있습니다! (#질문있어요 태그 자동 부여)</span>
                </div>
              </label>
              <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md">
                질문 등록 완료하기
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. 교사 문제 수정 모달 */}
      {editQuestionModal && editingQuestion && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-[150] overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl animate-in zoom-in-95 my-8 border border-slate-200">
            <div className="flex justify-between items-center mb-5 border-b pb-3">
              <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2"><Edit className="text-indigo-600" size={20}/> <span>문제 세트 수정</span></h3>
              <button onClick={() => { setEditQuestionModal(false); setEditingQuestion(null); }} className="text-slate-400 p-1.5 rounded-full transition-colors"><X size={18}/></button>
            </div>
            <form onSubmit={handleUpdateQuestionSubmit} className="space-y-4">
              <input type="text" value={editingQuestion.title} onChange={e => setEditingQuestion({...editingQuestion, title: e.target.value})} className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500" required />
              <div className="flex flex-wrap gap-2 p-2 border border-slate-300 rounded-xl bg-white focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow">
                {editingQuestion.tags.map((tag) => (
                  <span key={tag} className="bg-indigo-100 text-indigo-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-indigo-200 shadow-sm">#{tag} <button type="button" onClick={() => setEditingQuestion({...editingQuestion, tags: editingQuestion.tags.filter(t => t !== tag)})} className="hover:text-red-500">✕</button></span>
                ))}
                <input type="text" value={editingQuestion.currentTagInput} onChange={e => setEditingQuestion({...editingQuestion, currentTagInput: e.target.value})} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const val = editingQuestion.currentTagInput.trim().replace(/^#/, ''); if (val && !editingQuestion.tags.includes(val)) { setEditingQuestion({ ...editingQuestion, tags: editingQuestion.tags.concat(val), currentTagInput: '' }); } } }} className="flex-1 outline-none text-xs min-w-[100px] bg-transparent text-slate-900" placeholder="태그 추가 (Enter)" />
              </div>
              <div className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={editingQuestion.isPinned} onChange={e => setEditingQuestion({...editingQuestion, isPinned: e.target.checked})} className="rounded text-indigo-600 focus:ring-indigo-500" /> <span className="text-xs font-bold text-slate-700">상단 고정</span></label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={editingQuestion.isChallenge} onChange={e => setEditingQuestion({...editingQuestion, isChallenge: e.target.checked})} className="rounded text-indigo-600 focus:ring-indigo-500" /> <span className="text-xs font-bold text-slate-700">공개 챌린지</span></label>
              </div>
              <div onDragOver={e => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/')); if (files.length > 0) { setEditingQuestion(prev => prev ? ({ ...prev, items: prev.items.concat(files.map(file => ({ url: URL.createObjectURL(file), file }))) }) : null); } }} className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {editingQuestion.items.map((item, idx) => (
                    <div key={idx} className="relative group border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm"><img src={item.url} className="h-16 w-full object-cover cursor-zoom-in" onClick={() => openLightbox(item.url, '수정 미리보기')}/><button type="button" onClick={() => setEditingQuestion({...editingQuestion, items: editingQuestion.items.filter((_, i) => i !== idx)})} className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white p-0.5 rounded-full shadow-md"><X size={10}/></button></div>
                  ))}
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-200 hover:border-indigo-400 rounded-lg cursor-pointer h-16 bg-white transition-colors"><Plus size={16} className="text-indigo-500" /><span className="text-[9px] font-bold text-indigo-600">추가 (Ctrl+V)</span><input type="file" multiple accept="image/*" onChange={(e) => { const files = e.target.files ? Array.from(e.target.files) : []; if (files.length > 0) { setEditingQuestion(prev => prev ? ({ ...prev, items: prev.items.concat(files.map(file => ({ url: URL.createObjectURL(file), file }))) }) : null); } }} className="hidden" /></label>
                </div>
                <span className="text-[10px] text-slate-400 block font-semibold">순서 변경은 제거 후 재등록하거나, 이미지 복사/붙여넣기 제어해 주세요!</span>
              </div>
              <div className="flex gap-2.5 pt-3"><button type="button" onClick={() => { setEditQuestionModal(false); setEditingQuestion(null); }} className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors">취소</button>
              <button type="submit" className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs transition-colors shadow-md shadow-indigo-100">수정 완료</button></div>
            </form>
          </div>
        </div>
      )}

      {/* 4. 문항 상세 보기 (현황판 및 챌린지 코칭 모달) */}
      {selectedQuestion && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur flex items-center justify-center p-4 z-[80]">
          <div className="bg-white rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-start">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                  {selectedQuestion.isChallenge && <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded shadow-sm font-bold flex items-center gap-1"><Trophy size={10}/> 챌린지</span>}
                  {selectedQuestion.tags.map((t, i) => <span key={i} className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded border border-slate-300 shadow-sm">#{t}</span>)}
                </div>
                <h3 className="font-extrabold text-xl text-slate-900">{selectedQuestion.title}</h3>
              </div>
              <button onClick={() => { setSelectedQuestion(null); setViewingSubmission(null); setStudentSolutionPreview(''); setFeedbackInputImagePreview(''); }} className="p-2 hover:bg-slate-200 rounded-full transition-colors"><X size={20} className="text-slate-500" /></button>
            </div>
            
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              {/* Left Side: Question Images and Peer Gallery */}
              <div className="md:w-1/2 flex flex-col border-r border-slate-200 bg-slate-50/50 p-6 overflow-y-auto">
                <h4 className="text-xs font-extrabold text-slate-500 flex items-center gap-1 mb-3"><FileText size={14}/> 기출문제 세트</h4>
                <div className="relative group bg-white border border-slate-200 rounded-xl flex items-center justify-center h-[350px] mb-4 overflow-hidden shadow-sm">
                  <img src={selectedQuestion.imageUrls[qImageIdx]} alt="문제 이미지" className="max-h-full max-w-full object-contain p-2 cursor-zoom-in" onClick={()=>openLightbox(selectedQuestion.imageUrls[qImageIdx], selectedQuestion.title)} />
                  {selectedQuestion.imageUrls.length > 1 && (
                    <>
                      <button onClick={(e) => { e.stopPropagation(); setQImageIdx(p => Math.max(0, p - 1)); }} disabled={qImageIdx === 0} className={`absolute left-2 p-2 rounded-full bg-slate-800/60 text-white hover:bg-slate-800 transition shadow-md ${qImageIdx === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}><ArrowLeft size={20}/></button>
                      <button onClick={(e) => { e.stopPropagation(); setQImageIdx(p => Math.min(selectedQuestion.imageUrls.length - 1, p + 1)); }} disabled={qImageIdx === selectedQuestion.imageUrls.length - 1} className={`absolute right-2 p-2 rounded-full bg-slate-800/60 text-white hover:bg-slate-800 transition shadow-md ${qImageIdx === selectedQuestion.imageUrls.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}><ArrowRight size={20}/></button>
                      <div className="absolute bottom-3 bg-slate-900/70 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm border border-white/20">{qImageIdx + 1} / {selectedQuestion.imageUrls.length}</div>
                    </>
                  )}
                </div>

                {selectedQuestion.isStudentQuestion && (selectedQuestion.feedbackText || selectedQuestion.feedbackImageUrl) && (
                  <div className="mt-2 mb-4 bg-indigo-50 border border-indigo-200 rounded-2xl p-4 shadow-sm animate-fade-in">
                    <h4 className="text-sm font-extrabold text-indigo-700 mb-3 flex items-center gap-1"><Sparkles size={16}/> 선생님의 명쾌한 코칭 답변</h4>
                    {selectedQuestion.feedbackImageUrl && <img src={selectedQuestion.feedbackImageUrl} className="w-full rounded-xl border border-indigo-200 mb-3 shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity bg-white" onClick={()=>openLightbox(selectedQuestion.feedbackImageUrl || '', '선생님 답변')} />}
                    <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed font-medium">{selectedQuestion.feedbackText}</p>
                    <p className="text-[10px] text-indigo-400 mt-3 text-right font-mono font-bold">{formatDateTime(selectedQuestion.feedbackAt)}</p>
                  </div>
                )}

                {selectedQuestion.isChallenge && currentUser?.role === 'student' && submissions.some(s => s.questionId === selectedQuestion.id && s.studentId === currentUser.id) && (
                  <div className="mt-auto border-t pt-5 border-slate-200">
                    <h4 className="text-sm font-extrabold text-indigo-700 mb-3 flex items-center gap-1"><Users size={16}/> 참가자 갤러리 (친구 풀이 보기)</h4>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                      {submissions.filter(s => s.questionId === selectedQuestion.id && s.isShared && s.studentId !== currentUser.id).length === 0 ? (
                        <p className="text-xs text-slate-400 py-3 bg-white w-full text-center rounded-xl border border-dashed border-slate-200">공개된 다른 학생의 풀이가 없습니다.</p>
                      ) : (
                        submissions.filter(s => s.questionId === selectedQuestion.id && s.isShared && s.studentId !== currentUser.id).map(peerSub => (
                          <button key={peerSub.id} onClick={() => setViewingSubmission(peerSub)} className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${currentViewingSubmission?.id === peerSub.id ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105' : 'bg-white text-slate-700 hover:border-indigo-400 shadow-sm'}`}>{peerSub.studentName} 학생</button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side: Feedback, Solution, Submission Logic */}
              <div className="md:w-1/2 p-6 overflow-y-auto bg-white flex flex-col">
                {currentUser?.role === 'teacher' ? (
                  currentViewingSubmission ? (
                    <div className="flex flex-col h-full animate-fade-in">
                      {(() => {
                        const attempts = currentViewingSubmission.attempts || [{ imageUrl: currentViewingSubmission.imageUrl, feedbackText: currentViewingSubmission.feedbackText, feedbackImageUrl: currentViewingSubmission.feedbackImageUrl, submittedAt: currentViewingSubmission.submittedAt }];
                        const currentIdx = Math.min(selectedAttemptIdx, attempts.length - 1);
                        const currentAttempt = attempts[currentIdx] || {};
                        const isLatest = currentIdx === attempts.length - 1;
                        return (
                          <>
                            <button onClick={() => setViewingSubmission(null)} className="text-xs text-slate-500 hover:text-emerald-600 font-bold mb-3 flex items-center gap-1 w-fit transition-colors bg-slate-50 px-2 py-1 rounded-md border border-slate-200"><ArrowLeft size={14}/> 목록으로 돌아가기</button>
                            <div className="flex justify-between items-end mb-1"><h4 className="font-extrabold text-emerald-600 flex items-center gap-1 text-sm"><CheckCircle size={16}/> {currentViewingSubmission.studentName} 학생 풀이 첨삭</h4></div>
                            <div className="mb-4 bg-slate-100 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 flex gap-1.5 w-fit border border-slate-200"><span>📅 제출 시간:</span> <span className="font-mono font-bold bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">{formatDateTime(currentAttempt.submittedAt || currentViewingSubmission.submittedAt)}</span></div>
                            
                            {attempts.length > 1 && (
                              <div className="flex flex-wrap gap-2 pb-4 mb-4 border-b border-slate-100 items-center">
                                <span className="text-sm font-bold text-slate-500 shrink-0 mr-1">풀이 회차:</span>
                                {attempts.map((_, idx) => (
                                  <button key={idx} onClick={() => { setSelectedAttemptIdx(idx); setFeedbackInputText(attempts[idx].feedbackText || ''); setFeedbackInputImagePreview(attempts[idx].feedbackImageUrl || ''); setFeedbackInputImage(null); }} className={`px-4 py-2 text-xs font-bold rounded-xl border transition-colors shadow-sm ${currentIdx === idx ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'}`}>{idx + 1}회차 {idx === attempts.length - 1 && '(최신)'}</button>
                                ))}
                              </div>
                            )}

                            <img src={currentAttempt.imageUrl} className="h-40 object-contain rounded-xl border border-slate-200 shadow-inner mb-4 bg-slate-50 cursor-zoom-in hover:opacity-90 transition-opacity" onClick={()=>openLightbox(currentAttempt.imageUrl, currentViewingSubmission.studentName + ' 학생 풀이 (' + (currentIdx+1) + '회차)')}/>
                            
                            <div className="flex-1 space-y-4">
                              <div className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${feedbackInputImagePreview ? 'border-emerald-400 bg-emerald-50' : 'border-slate-300 hover:bg-slate-50'}`}>
                                {feedbackInputImagePreview ? (
                                  <div className="relative"><img src={feedbackInputImagePreview} className="max-h-24 mx-auto rounded border shadow-sm"/><button onClick={(e)=>{e.stopPropagation(); setFeedbackInputImagePreview(''); setFeedbackInputImage(null);}} className="absolute top-0 right-0 bg-slate-800 hover:bg-red-600 text-white p-1 rounded-full shadow-md transition-colors"><X size={12}/></button></div>
                                ) : (
                                  <label className="cursor-pointer block"><Upload className="mx-auto text-slate-400 mb-1" size={20}/><span className="text-xs font-bold text-emerald-600">{isLatest ? '새로운 첨삭 이미지 업로드 (Ctrl+V)' : '이 회차 첨삭 덮어쓰기 (Ctrl+V)'}</span><input type="file" accept="image/*" onChange={e=>{const f=e.target.files; if(f&&f[0]){setFeedbackInputImage(f[0]); setFeedbackInputImagePreview(URL.createObjectURL(f[0]));}}} className="hidden"/></label>
                                )}
                              </div>
                              <textarea value={feedbackInputText} onChange={e=>setFeedbackInputText(e.target.value)} placeholder="격려와 코멘트를 남겨주세요." className="w-full p-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 text-sm h-24 outline-none focus:ring-2 focus:ring-emerald-500 resize-none shadow-sm"/>
                            </div>
                            <button onClick={handleSaveFeedbackSubmit} className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl mt-4 shadow-md transition-colors">{isLatest ? '첨삭 저장 및 전송' : (currentIdx+1) + '회차 첨삭 수정하기'}</button>
                          </>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col animate-fade-in">
                      {selectedQuestion.isStudentQuestion && (
                        <div className="mb-6 bg-indigo-50 p-4 rounded-2xl border border-indigo-200 shrink-0 shadow-sm">
                          <h4 className="text-sm font-extrabold text-indigo-700 mb-3 flex items-center gap-1"><Sparkles size={16}/> 학생 질문에 직접 코칭하기</h4>
                          <div className={`border-2 border-dashed rounded-xl p-3 text-center cursor-pointer transition-colors mb-3 bg-white ${feedbackInputImagePreview ? 'border-emerald-400' : 'border-indigo-200 hover:bg-indigo-50/50'}`}>
                            {feedbackInputImagePreview ? (
                              <div className="relative"><img src={feedbackInputImagePreview} className="max-h-24 mx-auto rounded shadow-sm"/><button onClick={(e)=>{e.stopPropagation(); setFeedbackInputImagePreview(''); setFeedbackInputImage(null);}} className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full shadow-md transition-colors"><X size={12}/></button></div>
                            ) : (
                              <label className="cursor-pointer block py-2"><Upload className="mx-auto text-indigo-400 mb-1.5" size={20}/><span className="text-[10px] font-bold text-indigo-600 block">해설 이미지 첨부 (Ctrl+V)</span><input type="file" accept="image/*" onChange={e=>{const f=e.target.files; if(f&&f[0]){setFeedbackInputImage(f[0]); setFeedbackInputImagePreview(URL.createObjectURL(f[0]));}}} className="hidden"/></label>
                            )}
                          </div>
                          <textarea value={feedbackInputText} onChange={e=>setFeedbackInputText(e.target.value)} placeholder="학생의 질문에 대한 답변이나 힌트를 남겨주세요." className="w-full p-3 rounded-xl border border-indigo-200 bg-white text-slate-900 placeholder-slate-400 text-xs h-24 outline-none focus:ring-2 focus:ring-indigo-500 resize-none shadow-sm"/>
                          <button onClick={handleSaveQuestionFeedbackSubmit} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl mt-3 shadow-md transition-colors text-xs">{selectedQuestion.feedbackText || selectedQuestion.feedbackImageUrl ? '코칭 답변 수정하기' : '코칭 답변 전송'}</button>
                        </div>
                      )}
                      <h4 className="font-extrabold text-emerald-600 mb-4 flex items-center gap-1 text-sm"><Users size={16}/> 제출된 학생 풀이 목록</h4>
                      {(() => {
                        const qSubs = submissions.filter(s => s.questionId === selectedQuestion.id);
                        if (qSubs.length === 0) return <div className="flex-1 flex flex-col justify-center items-center text-slate-400 font-semibold border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50"><p>아직 제출된 풀이가 없습니다.</p></div>;
                        return (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto pb-4 scrollbar-thin">
                            {qSubs.map(sub => {
                              const attemptsCount = sub.attempts ? sub.attempts.length : 1;
                              return (
                                <div key={sub.id} onClick={() => { setViewingSubmission(sub); setActiveFeedbackSubmissionId(sub.id); const atts = sub.attempts || [{ feedbackText: sub.feedbackText, feedbackImageUrl: sub.feedbackImageUrl, submittedAt: sub.submittedAt }]; const latestAtt = atts[atts.length - 1]; setFeedbackInputText(latestAtt.feedbackText||''); setFeedbackInputImagePreview(latestAtt.feedbackImageUrl||''); setSelectedAttemptIdx(atts.length - 1); }} className="bg-white border border-slate-200 rounded-xl p-3 cursor-pointer hover:border-emerald-400 hover:shadow-md transition-all group flex flex-col">
                                  <div className="relative h-24 mb-2 rounded border border-slate-100 overflow-hidden shrink-0 bg-slate-50"><img src={sub.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /><span className={`absolute top-1 right-1 px-1.5 py-0.5 rounded text-[8px] font-bold shadow-sm border ${sub.status==='피드백 완료'?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-amber-50 text-amber-700 border-amber-200'}`}>{sub.status}</span></div>
                                  <div className="flex justify-between items-center mt-auto"><span className="font-bold text-sm text-slate-800 truncate">{sub.studentName}</span><span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 shadow-sm">{attemptsCount}회</span></div>
                                </div>
                              )
                            })}
                          </div>
                        )
                      })()}
                    </div>
                  )
                ) : (currentUser?.role === 'student' && submissions.some(s => s.questionId === selectedQuestion.id && s.studentId === currentUser.id)) ? (
                  <div className="flex flex-col h-full animate-fade-in">
                    {(() => {
                      const targetSub = currentViewingSubmission || submissions.filter(s => s.questionId === selectedQuestion.id && s.studentId === currentUser.id).pop() || {} as Submission;
                      const isMy = targetSub.studentId === currentUser.id;
                      const attempts = targetSub.attempts || [{ imageUrl: targetSub.imageUrl, feedbackText: targetSub.feedbackText, feedbackImageUrl: targetSub.feedbackImageUrl, submittedAt: targetSub.submittedAt }];
                      const currentIdx = Math.min(selectedAttemptIdx, attempts.length - 1);
                      const currentAttempt = attempts[currentIdx] || {};
                      const isLatest = currentIdx === attempts.length - 1;
                      const hasFeed = !!currentAttempt.feedbackText || !!currentAttempt.feedbackImageUrl;
                      return (
                        <div className="flex flex-col h-full space-y-4">
                          <div className={`p-4 rounded-2xl flex justify-between items-center shadow-sm border ${isMy ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-slate-200'}`}>
                            <span className="font-extrabold text-sm flex items-center gap-2">{isMy ? <><User size={16} className="text-indigo-600"/> 내 기록</> : <><Users size={16} className="text-slate-600"/> {targetSub.studentName} 학생 풀이</>}</span>
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${hasFeed ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>{hasFeed ? '피드백 완료' : '피드백 대기'}</span>
                          </div>
                          <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 flex items-center gap-1.5 w-fit shrink-0 shadow-sm"><span>📅</span> <span>제출 시간:</span> <span className="font-mono text-slate-800 font-bold bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">{formatDateTime(currentAttempt.submittedAt || targetSub.submittedAt)}</span></div>
                          
                          {attempts.length > 1 && (
                            <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-100 shrink-0 items-center">
                              <span className="text-sm font-bold text-slate-500 mr-1">이전 기록:</span>
                              {attempts.map((_, idx) => (
                                <button key={idx} onClick={() => { setSelectedAttemptIdx(idx); setIsEditingSolution(false); }} className={`px-4 py-2 text-xs font-bold rounded-xl border transition-colors shadow-sm ${currentIdx === idx ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'}`}>{idx + 1}회차</button>
                              ))}
                            </div>
                          )}

                          <div className="grid grid-cols-2 gap-3 shrink-0">
                            <div className="border border-slate-200 rounded-xl bg-slate-50 text-center relative overflow-hidden cursor-zoom-in shadow-sm" onClick={()=>openLightbox(currentAttempt.imageUrl, '풀이 이미지')}><div className="absolute top-0 w-full bg-black/60 text-white text-[9px] font-bold py-1.5 z-10 backdrop-blur-sm">제출본</div><img src={currentAttempt.imageUrl} className="h-32 w-full object-cover hover:opacity-90 transition-opacity" /></div>
                            <div className="border border-red-200 rounded-xl bg-red-50 text-center relative overflow-hidden cursor-zoom-in shadow-sm" onClick={()=>hasFeed && currentAttempt.feedbackImageUrl && openLightbox(currentAttempt.feedbackImageUrl, '교사 첨삭')}><div className="absolute top-0 w-full bg-red-600/80 text-white text-[9px] font-bold py-1.5 z-10 backdrop-blur-sm">선생님 첨삭</div>{currentAttempt.feedbackImageUrl ? <img src={currentAttempt.feedbackImageUrl} className="h-32 w-full object-cover hover:opacity-90 transition-opacity" /> : <div className="h-32 flex items-center justify-center text-[10px] text-slate-400 font-bold bg-white/50">{hasFeed ? '이미지 첨삭 없음' : '대기 중 ⏳'}</div>}</div>
                          </div>

                          {hasFeed && currentAttempt.feedbackText && (
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shrink-0 shadow-sm"><span className="text-[10px] font-extrabold text-indigo-700 flex gap-1 mb-1.5"><Sparkles size={12}/> 선생님 코멘트</span><p className="text-xs font-semibold text-slate-700 leading-relaxed whitespace-pre-wrap">{currentAttempt.feedbackText}</p></div>
                          )}

                          {isMy && isLatest && !isEditingSolution && <button onClick={() => setIsEditingSolution(true)} className="w-full py-3.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-xl border border-indigo-200 transition-colors shrink-0 shadow-sm">✏️ 다시 풀어서 추가 제출하기 (이전 기록 보존)</button>}

                          {isEditingSolution && (
                            <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl shrink-0 animate-fade-in shadow-sm">
                              <div className="flex justify-between items-center mb-3"><h4 className="font-extrabold text-sm text-indigo-950">추가 풀이 업로드</h4><button onClick={() => { setIsEditingSolution(false); setStudentSolutionPreview(''); setStudentSolutionImage(null); }} className="text-slate-400 hover:bg-slate-200 bg-white p-1 rounded-full shadow-sm transition-colors"><X size={14}/></button></div>
                              <div className="border-2 border-dashed border-indigo-200 rounded-xl p-4 text-center bg-white mb-3 cursor-pointer hover:bg-indigo-50/50 transition-colors">
                                {studentSolutionPreview ? (
                                  <div className="relative"><img src={studentSolutionPreview} className="max-h-24 mx-auto rounded-lg border shadow-sm"/><button onClick={(e)=>{e.stopPropagation(); setStudentSolutionImage(null); setStudentSolutionPreview('');}} className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full shadow-md transition-colors"><X size={12}/></button></div>
                                ) : (
                                  <label className="cursor-pointer block"><Upload className="mx-auto text-indigo-400 mb-2" size={24}/><span className="text-xs font-bold text-indigo-600 block">새로 푼 사진 첨부 (Ctrl+V)</span><input type="file" accept="image/*" onChange={e=>{const f=e.target.files; if(f&&f[0]){setStudentSolutionImage(f[0]); setStudentSolutionPreview(URL.createObjectURL(f[0]));}}} className="hidden"/></label>
                                )}
                              </div>
                              <button onClick={handleSubmitSolution} disabled={!studentSolutionPreview} className="w-full py-3 bg-indigo-600 disabled:bg-slate-300 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-colors text-xs">추가 회차 제출</button>
                            </div>
                          )}

                          {selectedQuestion.isChallenge && !isMy && (
                            <div className="flex-1 flex flex-col border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm mt-2">
                              <div className="bg-slate-100 p-3 text-xs font-extrabold text-slate-700 flex items-center gap-1 border-b border-slate-200"><MessageCircle size={14}/> {selectedQuestion.isStudentQuestion ? '답변 및 의견' : '친구들의 의견'}</div>
                              
                              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 min-h-[320px] scrollbar-thin">
                                {targetSub.peerComments && targetSub.peerComments.length > 0 ? (
                                  targetSub.peerComments.map((c) => (
                                    <div key={c.id} className="flex gap-2.5 items-start fade-in select-text">
                                      <div className="w-8 h-8 rounded-full bg-indigo-600/10 text-indigo-700 font-extrabold text-xs flex items-center justify-center shrink-0 border border-indigo-200 shadow-sm">{c.authorName[0]}</div>
                                      <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-sm text-xs relative max-w-[85%]">
                                        <div className="flex justify-between items-center mb-1.5"><span className="font-extrabold text-slate-800">{c.authorName}</span><span className="text-[9px] text-slate-400 font-mono bg-slate-50 px-1.5 py-0.5 rounded border">{formatDateTime(c.createdAt)}</span></div>
                                        {c.imageUrl && (
                                          <div className="my-2 max-w-full rounded-lg overflow-hidden border border-slate-200 cursor-zoom-in relative group shadow-sm" onClick={() => openLightbox(c.imageUrl!, '첨부 사진')}>
                                            <img src={c.imageUrl} alt="첨부 이미지" className="max-h-36 object-contain bg-slate-50 w-full" />
                                            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[9px] font-bold">확대 보기</div>
                                          </div>
                                        )}
                                        <p className="text-slate-700 leading-relaxed break-all whitespace-pre-wrap mt-1">{c.text}</p>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <div className="h-full flex flex-col items-center justify-center text-slate-400 py-10 text-center gap-2"><MessageSquare size={36} className="opacity-20 animate-bounce" /><p className="text-[10px] font-bold mt-2">작성된 답변 의견이 없습니다.</p><p className="text-[9px] text-slate-300">첫 번째 친절한 피드백 답글을 남겨주세요!</p></div>
                                )}
                              </div>
                              <form onSubmit={(e)=>handlePeerCommentSubmit(e, targetSub.id)} className="p-3.5 border-t border-slate-200 bg-white flex flex-col gap-2.5">
                                {peerCommentImagePreview && (
                                  <div className="relative w-fit border rounded-lg p-1 bg-slate-50 shadow-sm animate-in slide-in-from-bottom-2">
                                    <img src={peerCommentImagePreview} className="h-16 rounded object-cover"/>
                                    <button type="button" onClick={()=>{setPeerCommentImage(null); setPeerCommentImagePreview('');}} className="absolute -top-1.5 -right-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 shadow-md"><X size={12}/></button>
                                  </div>
                                )}
                                <div className="flex gap-2.5 items-center">
                                  <label className="cursor-pointer text-slate-400 hover:text-indigo-600 shrink-0 p-1.5 bg-slate-50 border border-slate-200 shadow-sm rounded-lg hover:bg-indigo-50 transition-colors" title="사진 파일 첨부"><ImageIcon size={20}/><input type="file" accept="image/*" onChange={e=>{const f=e.target.files; if(f&&f[0]){setPeerCommentImage(f[0]); setPeerCommentImagePreview(URL.createObjectURL(f[0]));}}} className="hidden"/></label>
                                  <input type="text" value={peerCommentInput} onChange={e=>setPeerCommentInput(e.target.value)} className="flex-1 px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white transition-all shadow-inner" placeholder="이미지 붙여넣기(Ctrl+V) 또는 의견 남기기..." />
                                  <button type="submit" disabled={!peerCommentInput.trim() && !peerCommentImage} className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 text-white px-5 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-colors shadow-sm">등록</button>
                                </div>
                              </form>
                            </div>
                          )}
                          {!isMy && <button onClick={()=>setViewingSubmission(null)} className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl mt-auto shadow-md transition-colors text-xs">목록으로 돌아가기</button>}
                        </div>
                      );
                    })()}
                  </div>
                ) : (currentUser?.role === 'student') && (
                  <div className="flex flex-col justify-center h-full space-y-6 animate-fade-in">
                    <div className="text-center"><h4 className="font-extrabold text-lg text-slate-900">{selectedQuestion.isStudentQuestion ? '이 질문에 답변해 줄 수 있나요?' : '도전할 준비가 되었나요?'}</h4><p className="text-xs text-slate-500 mt-1">{selectedQuestion.isStudentQuestion ? '답변 과정을 사진으로 찍어 업로드해주세요.' : '풀이 과정을 사진으로 찍어 업로드해주세요.'}</p></div>
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3 shadow-sm"><div className="bg-amber-100 p-2 rounded-full shrink-0 border border-amber-200"><Sparkles size={16} className="text-amber-600" /></div><div><h5 className="font-bold text-amber-900 text-sm mb-1">선생님의 당부 ✍️</h5><p className="text-xs text-amber-800 font-medium leading-relaxed">눈으로만 읽는 것보다 <b>직접 손으로 쓰며 고민하는 과정</b>에서 진짜 실력이 자라납니다. 백지에 정성껏 푼 나만의 풀이를 사진으로 찍어 올려주세요!</p></div></div>
                    <div className="border-2 border-dashed border-indigo-200 rounded-3xl p-6 text-center bg-indigo-50/30 hover:bg-indigo-50/60 transition-colors">
                      {studentSolutionPreview ? (
                        <div className="relative"><img src={studentSolutionPreview} alt="풀이 이미지" className="max-h-[200px] mx-auto rounded-xl border border-slate-200 shadow-sm"/><button onClick={()=>{setStudentSolutionImage(null); setStudentSolutionPreview('');}} className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full shadow-lg transition-colors"><X size={14}/></button></div>
                      ) : (
                        <label className="cursor-pointer block py-8"><Upload className="mx-auto text-indigo-500 mb-3" size={32}/><span className="text-sm font-extrabold text-indigo-700 block">{selectedQuestion.isStudentQuestion ? '답변 사진 첨부하기' : '풀이 사진 첨부하기'}</span><span className="text-[10px] text-slate-500 mt-1.5 block bg-white border border-slate-200 shadow-sm px-2 py-0.5 w-fit mx-auto rounded-full font-bold"><b>Ctrl+V</b> 캡처 붙여넣기 지원</span><input type="file" accept="image/*" onChange={e=>{const files=e.target.files; if(files&&files[0]){setStudentSolutionImage(files[0]); setStudentSolutionPreview(URL.createObjectURL(files[0]));}}} className="hidden"/></label>
                      )}
                    </div>
                    {selectedQuestion.isChallenge && (
                      <label className="flex items-start gap-3 bg-indigo-50 p-4 rounded-xl border border-indigo-100 cursor-pointer shadow-sm hover:bg-indigo-100/50 transition-colors"><input type="checkbox" checked={isSharedChecked} onChange={e=>setIsSharedChecked(e.target.checked)} className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"/><div className="flex flex-col"><span className="text-sm font-extrabold text-indigo-900">{selectedQuestion.isStudentQuestion ? '내 답변을 다른 친구들에게 공유합니다.' : '내 풀이를 챌린지 갤러리에 공유합니다.'}</span><span className="text-[10px] font-semibold text-indigo-600 mt-1">체크 시, 제출 후 다른 참가자들의 풀이를 열람하고 피드백할 수 있습니다.</span></div></label>
                    )}
                    <button onClick={handleSubmitSolution} disabled={!studentSolutionPreview} className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-2xl font-black text-sm shadow-xl shadow-indigo-200 transition-all active:scale-[0.98]">{selectedQuestion.isStudentQuestion ? '답변 최종 제출하기' : '풀이 최종 제출하기'}</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 가입된 교사/학생 및 대기 중인 교사 편집 전용 모달 */}
      {editQuestionModal && editingQuestion && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-[70] overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl animate-in zoom-in-95 my-8 border border-slate-200">
            <div className="flex justify-between items-center mb-5 border-b pb-3">
              <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                <Edit className="text-indigo-600" size={20}/>
                <span>문제 세트 수정</span>
                {editingQuestion.isStudentQuestion && <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-black">학생 질문</span>}
              </h3>
              <button onClick={() => { setEditQuestionModal(false); setEditingQuestion(null); }} className="text-slate-400 p-1.5 rounded-full transition-colors"><X size={18}/></button>
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
                      <button type="button" onClick={() => setEditingQuestion({...editingQuestion, tags: editingQuestion.tags.filter(t => t !== tag)})} className="hover:text-red-500">✕</button>
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
                            tags: editingQuestion.tags.concat(val), 
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
                      setEditingQuestion(prev => prev ? ({
                        ...prev,
                        items: prev.items.concat(files.map(file => ({ url: URL.createObjectURL(file), file })))
                      }) : null);
                    }
                  }} 
                  className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center bg-slate-50/50"
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
                    
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-200 hover:border-indigo-400 rounded-lg cursor-pointer h-16 transition-colors bg-white">
                      <Plus size={16} className="text-indigo-500" />
                      <span className="text-[9px] font-bold text-indigo-600">추가 (Ctrl+V)</span>
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        onChange={(e) => {
                          const files = e.target.files ? Array.from(e.target.files) : [];
                          if (files.length > 0) {
                            setEditingQuestion(prev => prev ? ({
                              ...prev,
                              items: prev.items.concat(files.map(file => ({ url: URL.createObjectURL(file), file })))
                            }) : null);
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

      {/* 💡 라이트박스 모달을 가장 하단으로 이동하여 스택 컨텍스트(Stacking Context) 버그 해결 */}
      {lightbox.show && (
        <div onClick={() => setLightbox({ show: false, imageUrl: '', title: '' })} className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 z-[300] cursor-zoom-out">
          <button className="absolute top-5 right-5 text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full font-bold text-xs shadow-lg transition-colors border border-slate-600">✕ 닫기</button>
          <img src={lightbox.imageUrl} alt="확대" className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border-4 border-slate-800/50" />
          <div className="mt-4 text-center"><p className="text-white font-extrabold text-base tracking-wide bg-slate-900/50 px-4 py-1.5 rounded-full">{lightbox.title}</p></div>
        </div>
      )}

      {/* 5. 앱 설치 모달 */}
      {appInstallModal && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 z-[200]">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 relative border border-slate-100">
            <button onClick={() => setAppInstallModal(false)} className="absolute top-4 right-4 text-slate-400 hover:bg-slate-100 p-1.5 rounded-full transition-colors"><X size={18}/></button>
            <div className="text-center mb-5"><div className="bg-indigo-50 text-indigo-600 p-3.5 rounded-full w-fit mx-auto mb-2.5 border border-indigo-100 shadow-sm"><Download size={28} /></div><h3 className="font-extrabold text-lg text-slate-900">홈 화면에 바로가기 앱 설치</h3><p className="text-xs text-slate-500 mt-1">링크 입력 없이 스마트폰에서 바로 접속하세요!</p></div>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"><h4 className="font-bold text-xs text-indigo-600 flex items-center gap-1.5 mb-2">🍎 아이폰 (Safari 브라우저)</h4><ol className="list-decimal pl-4 text-xs font-semibold text-slate-600 space-y-1"><li>Safari 하단 중앙의 <b className="text-slate-900 bg-slate-200 px-1.5 py-0.5 rounded shadow-sm">공유(내보내기)</b> 버튼 탭</li><li>메뉴 목록에서 <b className="text-slate-900">홈 화면에 추가 (+)</b> 선택</li></ol></div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"><h4 className="font-bold text-xs text-emerald-600 flex items-center gap-1.5 mb-2">🤖 안드로이드 (크롬 등)</h4><ol className="list-decimal pl-4 text-xs font-semibold text-slate-600 space-y-1"><li>브라우저 상단 <b className="text-slate-900 bg-slate-200 px-1.5 py-0.5 rounded shadow-sm">더보기(፧)</b> 누르기</li><li><b className="text-slate-900">홈 화면에 추가</b> 탭</li></ol></div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"><h4 className="font-bold text-xs text-slate-700 flex items-center gap-1.5 mb-2">💻 PC 브라우저</h4><p className="text-xs font-semibold text-slate-600">주소창 우측 <b className="text-slate-900 bg-slate-200 px-1.5 py-0.5 rounded shadow-sm">앱 설치 아이콘(🖥️)</b> 클릭</p></div>
            </div>
            <button onClick={() => setAppInstallModal(false)} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold mt-5 text-xs shadow-md transition-colors">확인 완료</button>
          </div>
        </div>
      )}

      {/* 6. 이용 가이드 튜토리얼 모달 */}
      {tutorial.show && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 z-[200]">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl flex flex-col items-center text-center relative overflow-hidden border border-slate-200">
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-indigo-50 to-white -z-10"></div>
            <div className="flex gap-2 mb-6">
              {TUTORIAL_STEPS[tutorial.role === 'teacher' ? 'teacher' : 'student'].map((_, idx) => (
                <div key={idx} className={`w-2.5 h-2.5 rounded-full transition-all shadow-inner border border-slate-200 ${idx === tutorial.step ? 'bg-indigo-600 scale-125 border-indigo-700' : 'bg-slate-200'}`}></div>
              ))}
            </div>
            <div className="mb-8 min-h-[160px] flex flex-col justify-center w-full">
              {TUTORIAL_STEPS[tutorial.role === 'teacher' ? 'teacher' : 'student'][tutorial.step].icon}
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{TUTORIAL_STEPS[tutorial.role === 'teacher' ? 'teacher' : 'student'][tutorial.step].title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold">{TUTORIAL_STEPS[tutorial.role === 'teacher' ? 'teacher' : 'student'][tutorial.step].desc}</p>
            </div>
            <div className="flex items-center justify-between w-full border-t border-slate-200 pt-5 mt-auto">
              <button onClick={completeTutorial} className="text-slate-400 hover:text-slate-600 text-xs font-bold px-2 py-1 transition-colors">건너뛰기</button>
              <div className="flex gap-2">
                {tutorial.step > 0 && <button onClick={() => setTutorial({ ...tutorial, step: tutorial.step - 1 })} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition-colors shadow-sm"><ArrowLeft size={14} className="inline mr-1"/> 이전</button>}
                {tutorial.step < TUTORIAL_STEPS[tutorial.role === 'teacher' ? 'teacher' : 'student'].length - 1 ? (
                  <button onClick={() => setTutorial({ ...tutorial, step: tutorial.step + 1 })} className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors">다음 <ArrowRight size={14} className="inline ml-1"/></button>
                ) : (
                  <button onClick={completeTutorial} className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md animate-bounce transition-colors"><CheckCircle size={14} className="inline mr-1"/> 시작하기</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. 컨펌 모달 */}
      {confirmModal.show && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-[250]">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl text-center border border-slate-200">
            <div className={`p-4 rounded-full w-fit mx-auto mb-4 border shadow-inner ${confirmModal.isDanger ? 'bg-red-50 text-red-600 border-red-100' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}><AlertCircle size={32} /></div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">{confirmModal.title}</h3>
            <p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">{confirmModal.message}</p>
            <div className="flex gap-2">
              <button onClick={() => setConfirmModal({ ...confirmModal, show: false, onConfirm: null })} className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-colors shadow-sm text-xs">취소</button>
              <button onClick={() => confirmModal.onConfirm?.()} className={`flex-1 py-3 text-white rounded-xl font-bold transition-colors shadow-md text-xs ${confirmModal.isDanger ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}>확인</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}