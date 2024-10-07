import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { TeacherAuthGuard } from './guards/teacher-auth.guard';
import { StudentAuthGuard } from './guards/student-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '/', loadChildren: () => import('src/app/pages/main/home/home.module').then((module) => module.HomeModule) },
  { path: 'notice', loadChildren: () => import('src/app/pages/main/notice/notice.module').then((module) => module.NoticeModule) },
  { path: 'result', loadChildren: () => import('src/app/pages/main/result/result.module').then((module) => module.ResultModule) },
  { path: 'terms-and-conditions', loadChildren: () => import('src/app/pages/main/terms-conditions/terms-conditions.module').then((module) => module.TermsConditionsModule) },
  { path: 'privacy-policy', loadChildren: () => import('src/app/pages/main/privacy-policy/privacy-policy.module').then((module) => module.PrivacyPolicyModule) },
  { path: 'refund-cancellation-policy', loadChildren: () => import('src/app/pages/main/refund-cancellation-policy/refund-cancellation-policy.module').then((module) => module.RefundCancellationPolicyModule) },
  { path: 'about', loadChildren: () => import('src/app/pages/main/about/about.module').then((module) => module.AboutModule) },
  { path: 'contact', loadChildren: () => import('src/app/pages/main/contact/contact.module').then((module) => module.ContactModule) },





  { path: 'toddler', loadChildren: () => import('src/app/pages/main/our-programs/toddler/toddler.module').then((module) => module.ToddlerModule) },
  { path: 'playgroup', loadChildren: () => import('src/app/pages/main/our-programs/playgroup/playgroup.module').then((module) => module.PlaygroupModule) },
  { path: 'nursery', loadChildren: () => import('src/app/pages/main/our-programs/nursery/nursery.module').then((module) => module.NurseryModule) },
  { path: 'san-junior', loadChildren: () => import('src/app/pages/main/our-programs/sanjunior/sanjunior.module').then((module) => module.SanjuniorModule) },
  { path: 'san-senior', loadChildren: () => import('src/app/pages/main/our-programs/sansenior/sansenior.module').then((module) => module.SanseniorModule) },


  { path: 'curriculam', loadChildren: () => import('src/app/pages/main/our-system/curriculam/curriculam.module').then((module) => module.CurriculamModule) },
  { path: 'parents-talk', loadChildren: () => import('src/app/pages/main/our-system/parents-talk/parents-talk.module').then((module) => module.ParentsTalkModule) },
  { path: 'partners-talk', loadChildren: () => import('src/app/pages/main/our-system/parteners-talk/parteners-talk.module').then((module) => module.PartenersTalkModule) },
  // { path: 'admissions', loadChildren: () => import('src/app/pages/main/admissions/admissions.module').then((module) => module.AdmissionsModule) },
  { path: 'franchise', loadChildren: () => import('src/app/pages/main/franchise/franchise.module').then((module) => module.FranchiseModule) },

  //  Student Routing Section
  { path: 'student/signup', loadChildren: () => import('src/app/pages/auth/student-auth/student-signup/student-signup.module').then((module) => module.StudentSignupModule) },
  { path: 'student/login', loadChildren: () => import('src/app/pages/auth/student-auth/student-login/student-login.module').then((module) => module.StudentLoginModule) },
  { path: 'student/forgot', loadChildren: () => import('src/app/pages/auth/student-auth/student-forgot/student-forgot.module').then((module) => module.StudentForgotModule) },


  { path: 'student/dashboard', loadChildren: () => import('src/app/pages/student/student-dashboard/student-dashboard.module').then((module) => module.StudentDashboardModule), canActivate: [StudentAuthGuard] },
  { path: 'student/fees', loadChildren: () => import('src/app/pages/student/student-fees/student-fees.module').then((module) => module.StudentFeesModule), canActivate: [StudentAuthGuard] },
  { path: 'student/fees/statement/:class/:id', loadChildren: () => import('src/app/pages/student/student-fees-statement/student-fees-statement.module').then((module) => module.StudentFeesStatementModule), canActivate: [StudentAuthGuard] },
  { path: 'student/admit-card', loadChildren: () => import('src/app/pages/student/student-admit-card/student-admit-card.module').then((module) => module.StudentAdmitCardModule), canActivate: [StudentAuthGuard] },
  { path: 'student/result', loadChildren: () => import('src/app/pages/student/student-result/student-result.module').then((module) => module.StudentResultModule), canActivate: [StudentAuthGuard] },
  // Admin Routing Section

  { path: 'admin/signup', loadChildren: () => import('src/app/pages/auth/admin-auth/admin-signup/admin-signup.module').then((module) => module.AdminSignupModule) },
  { path: 'admin/login', loadChildren: () => import('src/app/pages/auth/admin-auth/admin-login/admin-login.module').then((module) => module.AdminLoginModule) },
  { path: 'admin/forgot', loadChildren: () => import('src/app/pages/auth/admin-auth/admin-forgot/admin-forgot.module').then((module) => module.AdminForgotModule) },
  { path: 'admin/dashboard', loadChildren: () => import('src/app/pages/admin/dashboard/dashboard.module').then((module) => module.DashboardModule), canActivate: [AdminAuthGuard] },
  { path: 'admin/setting/school/detail', loadChildren: () => import('src/app/pages/admin/school/school.module').then((module) => module.SchoolModule), canActivate: [AdminAuthGuard] },
  { path: 'admin/franchise-enquiry', loadChildren: () => import('src/app/pages/admin/franchise-enquiry/franchise-enquiry.module').then((module) => module.FranchiseEnquiryModule), canActivate: [AdminAuthGuard] },

  // Teacher Routing Section
  { path: 'teacher/signup', loadChildren: () => import('src/app/pages/auth/teacher-auth/teacher-signup/teacher-signup.module').then((module) => module.TeacherSignupModule) },
  { path: 'teacher/login', loadChildren: () => import('src/app/pages/auth/teacher-auth/teacher-login/teacher-login.module').then((module) => module.TeacherLoginModule) },
  { path: 'teacher/dashboard', loadChildren: () => import('src/app/pages/teacher/teacher-dashboard/teacher-dashboard.module').then((module) => module.TeacherDashboardModule), canActivate: [TeacherAuthGuard] },


  { path: 'teacher/student/:id', loadChildren: () => import('src/app/pages/teacher/teacher-student-cls/teacher-student-cls.module').then((module) => module.TeacherStudentClsModule), canActivate: [TeacherAuthGuard] },
  { path: 'teacher/student/result/class/:id', loadChildren: () => import('src/app/pages/teacher/teacher-result/teacher-result.module').then((module) => module.TeacherResultModule), canActivate: [TeacherAuthGuard] },
  { path: 'teacher/student/admit-card/class/:id', loadChildren: () => import('src/app/pages/teacher/teacher-admit-card/teacher-admit-card.module').then((module) => module.TeacherAdmitCardModule), canActivate: [TeacherAuthGuard] },
  { path: 'teacher/student/admission/class/:id', loadChildren: () => import('src/app/pages/teacher/teacher-admission/teacher-admission.module').then((module) => module.TeacherAdmissionModule), canActivate: [TeacherAuthGuard] },
  { path: 'teacher/student/student/class/:id', loadChildren: () => import('src/app/pages/teacher/teacher-student/teacher-student.module').then((module) => module.TeacherStudentModule), canActivate: [TeacherAuthGuard] },
  { path: 'teacher/student/fees/class/:id', loadChildren: () => import('src/app/pages/teacher/teacher-fees-collection/teacher-fees-collection.module').then((module) => module.TeacherFeesCollectionModule), canActivate: [TeacherAuthGuard] },
  { path: 'teacher/student/fees/class/statement/:class/:id', loadChildren: () => import('src/app/pages/teacher/teacher-student-fee-statement/teacher-student-fee-statement.module').then((module) => module.TeacherStudentFeeStatementModule), canActivate: [TeacherAuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

