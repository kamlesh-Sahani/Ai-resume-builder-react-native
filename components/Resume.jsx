import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Button } from 'react-native-paper';

const Resume = ({ data }) => {
  const {
    contact_details,
    summary,
    skills,
    experience,
    education,
    projects,
    certifications,
    awards,
  } = data;

  const generateHTML = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { padding: 20px; }
          .section { margin-bottom: 20px; }
          .section h2 { border-bottom: 1px solid #333; padding-bottom: 5px; }
          .section ul { list-style-type: none; padding: 0; }
          .section ul li { margin-bottom: 10px; }
          .section ul li span { font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${contact_details.name || 'Name'}</h1>
          <p>Email: ${contact_details.email || 'N/A'}</p>
          <p>Phone: ${contact_details.phone || 'N/A'}</p>
          <p>GitHub: <a href="${contact_details.github || '#'}">${contact_details.github || 'N/A'}</a></p>
          <p>LinkedIn: <a href="${contact_details.linkedin || '#'}">${contact_details.linkedin || 'N/A'}</a></p>
          
          <div class="section">
            <h2>Professional Summary</h2>
            <p><strong>${summary.title || 'Summary Title'}</strong></p>
            <p>${summary.description || 'Summary Description'}</p>
          </div>
          
          <div class="section">
            <h2>Skills</h2>
            <ul>
              <li><span>Languages:</span> ${skills.languages ? skills.languages.join(', ') : 'N/A'}</li>
              <li><span>Frameworks & Libraries:</span> ${skills.frameworks_and_libraries ? skills.frameworks_and_libraries.join(', ') : 'N/A'}</li>
              <li><span>Tools & Technologies:</span> ${skills.tools_and_technologies ? skills.tools_and_technologies.join(', ') : 'N/A'}</li>
              <li><span>Methodologies:</span> ${skills.methodologies ? skills.methodologies.join(', ') : 'N/A'}</li>
              <li><span>Others:</span> ${skills.others ? skills.others.join(', ') : 'N/A'}</li>
            </ul>
          </div>
          
          <div class="section">
            <h2>Experience</h2>
            ${experience.map((job) => `
              <div>
                <p><strong>${job.company || 'Company'}</strong> - ${job.role || 'Role'}</p>
                <p>${job.duration || 'Duration'}</p>
                <ul>
                  ${job.responsibilities ? job.responsibilities.map((resp) => `<li>${resp}</li>`).join('') : ''}
                </ul>
                <p><strong>Achievements:</strong></p>
                <ul>
                  ${job.achievements ? job.achievements.map((ach) => `<li>${ach}</li>`).join('') : ''}
                </ul>
              </div>
            `).join('')}
          </div>
          
          <div class="section">
            <h2>Education</h2>
            <p><strong>${education.degree || 'Degree'}</strong></p>
            <p>${education.institution || 'Institution'}</p>
            <p>${education.duration || 'Duration'}</p>
          </div>
          
          <div class="section">
            <h2>Projects</h2>
            ${projects.map((project) => `
              <div>
                <p><strong>${project.name || 'Project Name'}</strong></p>
                <p>${project.description || 'Project Description'}</p>
                <ul>
                  ${project.features ? project.features.map((feature) => `<li>${feature}</li>`).join('') : ''}
                </ul>
                <p><a href="${project.link || '#'}">${project.link || 'Project Link'}</a></p>
              </div>
            `).join('')}
          </div>
          
          <div class="section">
            <h2>Certifications</h2>
            ${certifications.map((cert) => `
              <div>
                <p><strong>${cert.name || 'Certification Name'}</strong></p>
                <p>${cert.institution || 'Institution'} - ${cert.year || 'Year'}</p>
              </div>
            `).join('')}
          </div>
          
          <div class="section">
            <h2>Awards</h2>
            ${awards.map((award) => `
              <div>
                <p><strong>${award.title || 'Award Title'}</strong></p>
                <p>${award.organization || 'Organization'} - ${award.year || 'Year'}</p>
                <p>${award.description || 'Description'}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </body>
      </html>
    `;
  };

  const handleDownload = async () => {
    try {
      const html = generateHTML();
      const { uri } = await Print.printToFileAsync({ html });
      console.log(uri,"uri")

      // Share the file
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error('Error generating or sharing the resume:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resume</Text>
      <Button mode='contained' onPress={handleDownload}>Download Resume</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Resume;
