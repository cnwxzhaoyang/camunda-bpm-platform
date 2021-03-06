/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = `<!-- # CE - camunda-bpm-webapp/ui/cockpit/client/scripts/components/variables/variable-add-dialog.html -->
<div class="modal-header">
  <h3>
    {{ isProcessInstance && !isBatchOperation ? 'VARIABLE_ADD_MODAL_TITLE_PROCESS' : '' | translate }}
    {{ isBatchOperation ? 'VARIABLE_ADD_MODAL_TITLE_BATCH' : '' | translate }}
    {{ !isProcessInstance && !isBatchOperation ? 'VARIABLE_ADD_MODAL_TITLE_CASE' : '' | translate }}
  </h3>
</div>

<div class="modal-body add-variable-dialog">
  <div notifications-panel></div>

  <form class="form-horizontal"
        name="addVariableForm"
        novalidate
        ng-submit="save()"
        ng-hide="status === 'SUCCESS' || status === 'FAIL'"
        request-aware>
    <fieldset>

      <div class="form-group variable-name">
        <label class="control-label col-xs-4"
               for="variableName">{{ 'VARIABLE_ADD_VARIABLE_NAME' | translate }}</label>
        <div class="col-xs-8">
          <input id="variableNameId"
                 name="variableName"
                 class="form-control"
                 type="text"
                 ng-model="newVariable.name"
                 autofocus
                 required />
        </div>
      </div>

      <div class="form-group variable-type">
        <label class="control-label col-xs-4"
               for="variableType">{{ 'VARIABLE_ADD_VARIABLE_TYPE' | translate }}</label>
        <div class="col-xs-8">
          <select id="variableTypeId"
                  name="variableType"
                  class="form-control"
                  ng-options="variableType for variableType in variableTypes"
                  ng-model="newVariable.type">
          </select>
        </div>
      </div>

      <div class="form-group variable-value">
        <label class="control-label col-xs-4"
               for="variableValue">{{ 'VARIABLE_ADD_VARIABLE_VALUE' | translate }}</label>
        <div class="col-xs-8">
          <div variable="newVariable" form="addVariableForm"></div>

          <p class="invalid"
             ng-show="this.addVariableForm.editDateValue.$error.datePattern">
            {{ 'VARIABLE_ADD_VARIABLE_SUPPORTED' | translate }}
          </p>

          <p class="invalid"
             ng-show="this.addVariableForm.editDateValue.$error.dateValue">
            Invalid Date Value.
          </p>

          <p class="invalid"
             ng-show="this.addVariableForm.editIntegerValue.$error.numeric || this.addVariableForm.editFloatValue.$error.numeric"
             translate="VARIABLE_ADD_VARIABLE_ONLY"
             translate-values="{ type : newVariable.type }">
          </p>
        </div>
      </div>

    </fieldset>
  </form>

  <div ng-if="status === 'SUCCESS' && isBatchOperation"
       translate="VARIABLE_ADD_STATUS_SUCCESS_BATCH"
       translate-values="{ name: newVariable.name }">
  </div>

  <div ng-if="status === 'SUCCESS' && isProcessInstance && !isBatchOperation"
       translate="VARIABLE_ADD_STATUS_SUCCESS_PROCESS"
       translate-values="{ name: newVariable.name }">
  </div>

  <div ng-if="status === 'SUCCESS' && !isProcessInstance && !isBatchOperation"
       translate="VARIABLE_ADD_STATUS_SUCCESS_CASE"
       translate-values="{ name: newVariable.name }">
  </div>

  <div ng-show="status === 'FAIL' && isProcessInstance && !isBatchOperation"
       translate="VARIABLE_ADD_STATUS_FAIL_PROCESS"
       translate-values="{ name: newVariable.name }">
  </div>

  <div ng-show="status === 'FAIL' && !isProcessInstance && !isBatchOperation"
       translate="VARIABLE_ADD_STATUS_FAIL_CASE"
       translate-values="{ name: newVariable.name }">
  </div>

</div>

<div class="modal-footer">
  <button class="btn btn-link"
          ng-click="close()"
          ng-disabled="status === 'PERFORM_SAVE'"
          ng-hide="status === 'SUCCESS' || status === 'FAIL'">{{ 'VARIABLE_ADD_CLOSE' | translate }}</button>

  <button type="submit"
          class="btn btn-primary"
          ng-click="save()"
          ng-hide="status === 'SUCCESS' || status === 'FAIL'"
          ng-disabled="!isValid()">{{ 'VARIABLE_ADD_ADD' | translate }}</button>

  <button class="btn btn-primary"
          ng-click="close()"
          ng-show="status === 'SUCCESS' || status === 'FAIL'">{{ 'VARIABLE_ADD_OK' | translate }}</button>
</div>
<!-- / CE - camunda-bpm-webapp/ui/cockpit/client/scripts/components/variables/variable-add-dialog.html -->
`;
