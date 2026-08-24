-- ==========================================
-- SUPABASE PORTFOLIO DATABASE SCHEMA SETUP
-- Copy and run this script in the Supabase SQL Editor
-- ==========================================

-- 1. Create Projects Table
create table if not exists projects (
  id int8 generated always as identity primary key,
  title text not null,
  image text,
  category text not null,
  tech text[] not null,
  github text,
  description_en text,
  description_id text,
  created_at timestamptz default now()
);

-- 2. Create Experiences Table
create table if not exists experiences (
  id int8 generated always as identity primary key,
  organization text not null,
  position text not null,
  period text not null,
  type text not null,
  contributions_en text[] not null,
  contributions_id text[] not null,
  logo text,
  created_at timestamptz default now()
);

-- 3. Create Certificates Table
create table if not exists certificates (
  id int8 generated always as identity primary key,
  name text not null,
  issuer text not null,
  year text not null,
  category text not null,
  image text,
  created_at timestamptz default now()
);

-- 4. Create Inbox Messages Table
create table if not exists inbox (
  id int8 generated always as identity primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);

-- 5. Create Site Content Table
create table if not exists site_content (
  id int8 primary key default 1,
  hero_greeting_en text,
  hero_greeting_id text,
  hero_role_en text,
  hero_role_id text,
  hero_available_en text,
  hero_available_id text,
  hero_description_en text,
  hero_description_id text,
  about_heading_en text,
  about_heading_id text,
  about_p1_en text,
  about_p1_id text,
  about_p2_en text,
  about_p2_id text,
  about_stats_proj_val text,
  about_stats_proj_label_en text,
  about_stats_proj_label_id text,
  about_stats_years_val text,
  about_stats_years_label_en text,
  about_stats_years_label_id text,
  about_stats_tech_val text,
  about_stats_tech_label_en text,
  about_stats_tech_label_id text,
  about_stats_org_val text,
  about_stats_org_label_en text,
  about_stats_org_label_id text,
  edu_heading_en text,
  edu_heading_id text,
  edu_description_en text,
  edu_description_id text,
  edu_degree_en text,
  edu_degree_id text,
  edu_institution text,
  edu_period text,
  edu_focus_en text,
  edu_focus_id text,
  edu_status_en text,
  edu_status_id text,
  edu_logo text,
  edu_gpa text
);

-- 6. Enable Row Level Security (RLS) and define secure policies
alter table projects enable row level security;
alter table experiences enable row level security;
alter table certificates enable row level security;
alter table inbox enable row level security;
alter table site_content enable row level security;

-- Policies for projects
create policy "Allow public read" on projects for select using (true);
create policy "Allow authenticated insert" on projects for insert with check (auth.role() = 'authenticated');
create policy "Allow authenticated update" on projects for update using (auth.role() = 'authenticated');
create policy "Allow authenticated delete" on projects for delete using (auth.role() = 'authenticated');

-- Policies for experiences
create policy "Allow public read" on experiences for select using (true);
create policy "Allow authenticated insert" on experiences for insert with check (auth.role() = 'authenticated');
create policy "Allow authenticated update" on experiences for update using (auth.role() = 'authenticated');
create policy "Allow authenticated delete" on experiences for delete using (auth.role() = 'authenticated');

-- Policies for certificates
create policy "Allow public read" on certificates for select using (true);
create policy "Allow authenticated insert" on certificates for insert with check (auth.role() = 'authenticated');
create policy "Allow authenticated update" on certificates for update using (auth.role() = 'authenticated');
create policy "Allow authenticated delete" on certificates for delete using (auth.role() = 'authenticated');

-- Policies for site_content
create policy "Allow public read" on site_content for select using (true);
create policy "Allow authenticated update" on site_content for update using (auth.role() = 'authenticated');

-- Policies for inbox (Contact messages)
-- Anyone can send a message (insert)
create policy "Allow public insert" on inbox for insert with check (true);
-- Only authenticated admins can read or delete messages
create policy "Allow authenticated read" on inbox for select using (auth.role() = 'authenticated');
create policy "Allow authenticated delete" on inbox for delete using (auth.role() = 'authenticated');

-- 7. Seed initial default general site contents
insert into site_content (
  id,
  hero_greeting_en, hero_greeting_id,
  hero_role_en, hero_role_id,
  hero_available_en, hero_available_id,
  hero_description_en, hero_description_id,
  about_heading_en, about_heading_id,
  about_p1_en, about_p1_id,
  about_p2_en, about_p2_id,
  about_stats_proj_val, about_stats_proj_label_en, about_stats_proj_label_id,
  about_stats_years_val, about_stats_years_label_en, about_stats_years_label_id,
  about_stats_tech_val, about_stats_tech_label_en, about_stats_tech_label_id,
  about_stats_org_val, about_stats_org_label_en, about_stats_org_label_id,
  edu_heading_en, edu_heading_id,
  edu_description_en, edu_description_id,
  edu_degree_en, edu_degree_id,
  edu_institution, edu_period,
  edu_focus_en, edu_focus_id,
  edu_status_en, edu_status_id,
  edu_logo, edu_gpa
) values (
  1,
  'Hi, I''m', 'Hai, Saya',
  'Frontend & Mobile Developer', 'Frontend & Mobile Developer',
  'AVAILABLE FOR INTERNSHIP', 'TERSEDIA UNTUK MAGANG',
  'Passionate about building intuitive digital experiences — from responsive web interfaces to mobile applications.',
  'Bersemangat membangun pengalaman digital yang intuitif — dari antarmuka web responsif hingga aplikasi mobile.',
  'Building digital experiences that matter', 'Membangun pengalaman digital yang bermakna',
  'I''m an Informatics Engineering student at Universitas Pasundan with a passion for frontend web and mobile application development.',
  'Saya adalah mahasiswa Teknik Informatika di Universitas Pasundan yang memiliki passion di bidang pengembangan frontend web dan aplikasi mobile.',
  'My focus is on creating digital solutions that are not only visually appealing but also deliver intuitive user experiences. I''m committed to continuous learning and always keep up with the latest technologies.',
  'Fokus saya adalah menciptakan solusi digital yang tidak hanya terlihat bagus, tetapi juga memberikan pengalaman pengguna yang intuitif. Saya berkomitmen pada continuous learning dan selalu mengikuti perkembangan teknologi terkini.',
  '5+', 'PROJECTS BUILT', 'PROYEK DIBUAT',
  '3+', 'YEARS LEARNING', 'TAHUN BELAJAR',
  '10+', 'TECHNOLOGIES', 'TEKNOLOGI',
  '2+', 'ORGANIZATIONS', 'ORGANISASI',
  'Academic Background', 'Latar Belakang Akademik',
  'Studying Informatics Engineering provides a strong foundation in problem solving, algorithms, and software development applied in every project.',
  'Mempelajari Teknik Informatika memberikan landasan kuat dalam pemecahan masalah, algoritma, dan pengembangan perangkat lunak yang diterapkan dalam setiap proyek.',
  'Bachelor of Informatics Engineering', 'Sarjana Teknik Informatika',
  'Universitas Pasundan', '2022 – Present',
  'Focused on software engineering, algorithms, software design, and web & mobile technology.',
  'Fokus pada rekayasa perangkat lunak, algoritma, desain perangkat lunak, serta teknologi web & mobile.',
  'Active Student', 'Mahasiswa Aktif',
  '/img/unpas.png', '3.72'
) on conflict (id) do nothing;

-- 8. Seed default projects
insert into projects (title, image, category, tech, github, description_en, description_id)
values 
('EducationZone', '/img/educationzone.svg', 'web', array['HTML', 'CSS', 'JavaScript', 'PHP'], 'https://github.com/Mohzu/pw2023_223040101/tree/main/tubes', 'An interactive online education portal for students to find courses and learn programming online.', 'Portal pembelajaran daring interaktif untuk membantu siswa belajar pemrograman secara mandiri.'),
('OPET Mobile App', '/img/opet.svg', 'mobile', array['Java', 'Android Studio', 'XML'], '#', 'A mobile application for community operations and division management built native in Java.', 'Aplikasi seluler terintegrasi untuk operasi dan manajemen divisi komunitas secara teratur.'),
('RetroGameHub', '/img/retrogamehub.svg', 'web', array['Laravel', 'React.js', 'MySQL', 'Tailwind CSS'], 'https://github.com/Lisvindanu/kelompok3_romusha', 'A full-stack Laravel & React web application listing retro game emulators and rom shares.', 'Aplikasi web full-stack Laravel & React untuk berbagi emulasi dan berkas permainan klasik.'),
('DriveCare', '/img/drivecare.svg', 'mobile', array['Java', 'Android Studio', 'REST API'], 'https://github.com/KakaPradithaa/Tubes_Prakmob', 'A mobile assistant application for vehicle maintenance and service tracking.', 'Aplikasi asisten seluler untuk pelacakan jadwal pemeliharaan dan servis kendaraan.'),
('Game BruShoot', '/img/brushoot.svg', 'game', array['Unity', 'C#'], '#', 'A 2D side-scrolling shooting game developed using Unity engine.', 'Permainan tembak-menembak 2D gulir samping yang dikembangkan menggunakan Unity Engine.');

-- 9. Seed default experiences
insert into experiences (organization, position, period, type, contributions_en, contributions_id, logo)
values
('PT. Jasa Digital Nusantara (JDN)', 'Frontend Developer Intern', 'Feb 2024 – Jun 2024', 'Internship', array['Developed and maintained responsive web application features using React.js and Tailwind CSS.', 'Collaborated with design teams to implement pixel-perfect user interface components.', 'Participated in daily stand-ups and sprint planning under Agile methodology.'], array['Mengembangkan dan memelihara fitur aplikasi web responsif menggunakan React.js dan Tailwind CSS.', 'Berkolaborasi dengan tim desain untuk mengimplementasikan komponen UI yang pixel-perfect.', 'Berpartisipasi dalam daily stand-up dan perencanaan sprint dalam alur kerja Agile.'], null),
('Himpunan Mahasiswa Informatika UNPAS', 'Staff of Creative Division', '2023 – 2024', 'Organization', array['Designed and executed academic events and coding bootcamps for student development.', 'Managed branding materials and publication assets for community engagement.'], array['Merancang dan melaksanakan kegiatan akademik serta bootcamp pemrograman untuk mahasiswa.', 'Mengelola materi branding dan aset publikasi untuk meningkatkan keterlibatan komunitas.'], null);

-- 10. Seed default certificates
insert into certificates (name, issuer, year, category, image)
values
('Responsive Web Design', 'freeCodeCamp', '2023', 'Frontend', null),
('Frontend Developer Path', 'Dicoding Academy', '2023', 'Frontend', null),
('Database Foundations', 'Oracle Academy', '2023', 'Backend', null),
('Mobile Application Specialist', 'Android Developer Associate', '2024', 'Mobile', null);

-- 11. Create storage bucket for uploading files
-- Note: buckets can also be created via the Supabase dashboard GUI
insert into storage.buckets (id, name, public)
values ('portfolio-media', 'portfolio-media', true)
on conflict (id) do nothing;

-- 12. Set Storage policies for public read & authenticated write
create policy "Allow public read access" on storage.objects for select using (bucket_id = 'portfolio-media');
create policy "Allow authenticated upload access" on storage.objects for insert with check (bucket_id = 'portfolio-media' and auth.role() = 'authenticated');
create policy "Allow authenticated update access" on storage.objects for update using (bucket_id = 'portfolio-media' and auth.role() = 'authenticated');
create policy "Allow authenticated delete access" on storage.objects for delete using (bucket_id = 'portfolio-media' and auth.role() = 'authenticated');
