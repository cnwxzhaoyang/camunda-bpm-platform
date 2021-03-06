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

module.exports = `<!-- # cockpit client/scripts/repository/deployments/modals/cam-cockpit-delete-deployment-modal.html -->
<div class="modal-header">
  <h3 class="modal-title"
      translate="REPOSITORY_DEPLOYMENTS_DELETE_TITLE"
      translate-values="{deployment: deployment.name || deployment.id}"></h3>
</div>

<div class="modal-body delete-deployment-dialog">
  <div notifications-panel></div>

  <div ng-hide="countsLoaded()"
       class="loader">
    <span class="animate-spin glyphicon glyphicon-refresh"></span>
    {{ 'REPOSITORY_DEPLOYMENTS_DELETE_LOADING' | translate }}
  </div>

  <div ng-show="countsLoaded()">

    {{ 'REPOSITORY_DEPLOYMENTS_DELETE_THIS_DEPLOYMENT' | translate }}

    <div uib-alert class="alert alert-info"
         ng-show="hasInstances()">
      <span translate="REPOSITORY_DEPLOYMENTS_DELETE_ENABLE_CASCADE"
            translate-values="{info: getInfoSnippet()}"></span>
      <code>{{ 'REPOSITORY_DEPLOYMENTS_DELETE_CASCADE' | translate }}</code>
      {{ 'REPOSITORY_DEPLOYMENTS_DELETE_FLAG' | translate }}
    </div>

    <form class="form-horizontal"
          name="deleteDeploymentForm"
          novalidate
          request-aware>

      <div class="form-group cascade">

        <label class="control-label col-xs-5"
               for="cascade">
          {{ 'REPOSITORY_DEPLOYMENTS_DELETE_CASCADE' | translate }}
          <span class="glyphicon glyphicon-question-sign"
                uib-tooltip="{{ 'REPOSITORY_DEPLOYMENTS_DELETE_CASCADE_TOOLTIP' | translate }}"
                tooltip-placement="right">
          </span>
        </label>

        <div class="col-xs-7">
          <label class="checkbox">
            <input name="cascade"
                   type="checkbox"
                   ng-model="options.cascade">
          </label>
        </div>

      </div>

      <div  ng-hide="hideSkipCustomListeners"
            class="form-group skip-custom-listener">

        <label class="control-label col-xs-5"
               for="skipCustomListeners">
          {{ 'REPOSITORY_DEPLOYMENTS_DELETE_SKIP' | translate }}
          <span class="glyphicon glyphicon-question-sign"
                uib-tooltip="{{ 'REPOSITORY_DEPLOYMENTS_DELETE_SKIP_TOOLTIP' | translate }}"
                tooltip-placement="right">
          </span>
        </label>

        <div class="col-xs-7">
          <label class="checkbox">
            <input name="skipCustomListeners"
                   type="checkbox"
                   ng-model="options.skipCustomListeners">
          </label>
        </div>

      </div>

      <div class="form-group skip-custom-listener"
           ng-hide="SKIP_IO_MAPPINGS.hidden">

        <label class="control-label col-xs-5"
               for="skipIoMappings">
          {{ 'REPOSITORY_DEPLOYMENTS_DELETE_MAPPING' | translate }}
          <span class="glyphicon glyphicon-question-sign"
                uib-tooltip="{{ 'REPOSITORY_DEPLOYMENTS_DELETE_MAPPING_TOOLTIP' | translate }}"
                tooltip-placement="right">
          </span>
        </label>

        <div class="col-xs-7">
          <label class="checkbox">
            <input name="skipIoMappings"
                   type="checkbox"
                   ng-model="options.skipIoMappings">
          </label>
        </div>

      </div>

    </form>

    {{ 'REPOSITORY_DEPLOYMENTS_DELETE_SURE' | translate }}

  </div>

</div>

<div class="modal-footer">
  <button class="btn btn-link"
          ng-click="$dismiss()"
          ng-disabled="status === 'PERFORM_DELETE'">{{ 'REPOSITORY_DEPLOYMENTS_DELETE_CLOSE' | translate }}</button>

  <button type="submit"
          class="btn btn-primary"
          ng-click="deleteDeployment()"
          ng-show="countsLoaded()"
          ng-disabled="!canDeleteDeployment() || status === 'PERFORM_DELETE'">{{ 'REPOSITORY_DEPLOYMENTS_DELETE_DELETE' | translate }}</button>
</div>
<!-- / cockpit client/scripts/repository/deployments/modals/cam-cockpit-delete-deployment-modal.html -->
`;
