import Section from '@/components/common/section';
import TimelineItem from '@/components/common/timelineItem';

const Education = () => {
  return (
    <Section id="education" title="Education" showLine={false}>
      <div className="education relative w-100 mx-8 mt-8 mb-16">
        <div className="timeline-line border-r-2 border-gray-500 absolute h-full top-0" />
        <ul className="list-none m-0 p-0">
          <TimelineItem subTitle="September 2016 - August 2018" title="Master Degree in Computer Science">
            <div className="mb-1">Agile Methodology - Project Management - Software Engineering - CI/CD</div>
            <p>Valedictorian with average: 15.28 / 20</p>
          </TimelineItem>

          <TimelineItem subTitle="September 2013 - August 2016" title="Bachelor in Computer Science">
            <div className="mb-1">Algorithms and Data structures - Mobile and Web Development</div>
            <p>Valedictorian with average: 15.67 / 20</p>
          </TimelineItem>
        </ul>
      </div>
    </Section>
  );
};

export default Education;
