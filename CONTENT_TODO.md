# Content TODO

The website now uses only information explicitly provided in `WEBSITE_BLUEPRINT.md` and files from the external `teamlab-information` material folder. The following materials still need manual verification and completion before the site is considered content-complete.

## Successfully Integrated Assets

- People images from `teamlab-information/people` copied to `assets/images/people/`.
- People names from `teamlab-information/people/name.txt` parsed into PI, Team Co-Investigators, Postdoctoral Associates, current PhD students, and former PhD students where the category was explicit.
- Homepage images from `teamlab-information/home` copied to `assets/images/slider/` and connected in `_data/slider.yml`.
- Gallery image from `teamlab-information/photos` copied to `assets/images/gallery/` and connected in `_data/gallery.yml`.
- Publication records from `teamlab-information/publication/publication.txt` added to `_data/publications.yml` with DOI fields left blank.

## Needs Manual Confirmation

- Confirm each member's role/category: postdoc, PhD student, research assistant, alumni, or other.
- Confirm English names or preferred romanization for 蔡明学, 刘佳, 徐升, 付仕雄, 彭乾碧, 马国耀, 李冬, and 刘慧彬.
- Confirm research interests for current PhD students: 马国耀, 李冬, and 刘慧彬.
- Confirm research interests and full profile details for Team Co-Investigators: 蔡明学, 刘佳, and 徐升.
- Confirm graduation destination and graduation year for former PhD students: 付仕雄 and 彭乾碧.
- Confirm captions for homepage slider images.
- Confirm caption for `assets/images/gallery/photo-01.jpg`.
- Confirm the title, date, description, and caption for `assets/images/news/news-01.png`.
- Add DOI links for publications.
- Complete grant list from official sources, including all project numbers, funders, amounts, periods, status, and roles.
- Verify news publication dates and official announcement text.
- Add teaching/course information, including course code, course name, level, and semester.

## Image Asset Checklist

Completed:
- PI portrait photo: `assets/images/people/xu-tiantian.jpg`.
- Pending-confirmation member portraits: `assets/images/people/member-01.jpg` through `member-09.jpg`.
- Homepage slider images: `assets/images/slider/slider-01.png`, `slider-02.png`, `slider-03.png`.
- News image: `assets/images/news/news-01.png`.
- Research card images remain connected to existing `assets/images/research/design.jpg`, `control.jpg`, and `applications.jpg`.
- Gallery image: `assets/images/gallery/photo-01.jpg`.

Still Needed:
- Future homepage slider material should be appended as new entries rather than replacing existing slider images. Continue numbering from the current maximum, such as `slider-04.png`.
- Optional thumbnails for gallery images in `assets/images/gallery/thumbs/`.
- Additional verified lab gallery photos and captions.
- Confirm whether older gallery images should remain in use or be archived.

## People Page Automation

- PhD student year labels are calculated in the browser from `enrollment_year`, `grade_rollover_month`, `program`, and `graduated`.
- The rollover month is September (`grade_rollover_month: 9`).
- Year labels are capped at Year 4. After Year 4, the page displays `Former PhD Student`.
- If `graduated: true`, the page displays `Former PhD Student` regardless of enrollment year.
