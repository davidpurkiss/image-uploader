import { DOM, noView } from 'aurelia-framework';
import { Renderer, DialogController } from 'aurelia-dialog';
import 'semantic-ui';

var modals: JQuery[] = [];

@noView
export class SemanticModalRenderer implements Renderer {

    

    getDialogContainer(): Element {

        return $('<div></div>')[0];
    }

    showDialog(dialogController: DialogController): Promise<void> {

        (<any>dialogController).controller.attached();

        return this.renderDialog(dialogController);
    }

    renderDialog(dialogController: DialogController): Promise<void> {
        return new Promise<void>((resolve: () => void) => {

            let element = (<any>dialogController).slot.anchor.lastElementChild;
            modals.push(element);

            this.showSemanticModal(element, resolve);
        });
    }

    showSemanticModal(element, resolve) {
        $(element).modal()
            .modal(<any>{
                closable: false,
                allowMultiple: false,
                onHidden: function () {
                    $(element).remove();
                },
                onVisible: function () {
                    $(element).modal("refresh");
                    resolve();
                }
            })
            .modal('observeChanges', true)
            .modal('show');
    }

    hideDialog(dialogController: DialogController): Promise<void> {

        return new Promise<void>((resolve: () => void) => {

            let element = modals.pop();

            $(element).modal(<any>{ onHide: resolve });
            $(element).modal('hide');

            (<any>dialogController).slot.detached();

            $(element).remove();

            if (modals.length > 0)
                this.showSemanticModal(modals[modals.length - 1], resolve);
        });
    }

}