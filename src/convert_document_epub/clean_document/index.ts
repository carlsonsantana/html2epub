import removeElementsFromDocument from './remove_elements';
import removeHiddenElements from './remove_hidden_elements';
import removeAllComments from './remove_comments';
import removeEmptyElements from './remove_empty_elements';
import removeDataAttributes from './remove_data_attributes';
import removeAttributes from './remove_attributes';
import mergeTextNodes from './merge_text_nodes';
import removeExtraWhitespacesFromDocument from './remove_whitespaces';
import step, { Process } from '../../step';

const DESCRIPTION = 'Cleaning HTML document';


function cleanDocument(htmlDoc: HTMLDocument) {
  const firstStep = () => htmlDoc;

  const cleanDocumentProcess = new Process();

  cleanDocumentProcess.addStep(firstStep);
  cleanDocumentProcess.addStep(removeElementsFromDocument, [firstStep]);
  cleanDocumentProcess.addStep(removeHiddenElements, [firstStep]);
  cleanDocumentProcess.addStep(removeAllComments, [firstStep]);
  cleanDocumentProcess.addStep(removeEmptyElements, [firstStep]);
  cleanDocumentProcess.addStep(removeDataAttributes, [firstStep]);
  cleanDocumentProcess.addStep(removeAttributes, [firstStep]);
  cleanDocumentProcess.addStep(mergeTextNodes, [firstStep]);
  cleanDocumentProcess.addStep(removeExtraWhitespacesFromDocument, [firstStep]);

  cleanDocumentProcess.process();
}

export default step(DESCRIPTION, cleanDocument);
