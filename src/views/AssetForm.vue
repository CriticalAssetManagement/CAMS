<template>
  <v-card>
    <v-card-title>New Asset Form</v-card-title>

    <v-stepper v-model="el">
      <!-- Stepper Header -->
      <v-stepper-header>
        <v-stepper-step :complete="el > 1" step="1">
          Asset Information
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="el > 2" step="2">
          Asset Location
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="el > 3" step="3">
          Asset History
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="el > 4" step="4">
          Asset Dependencies
        </v-stepper-step>
      </v-stepper-header>

      <!-- Stepper Items -->
      <v-stepper-items>
        <!-- Step 1: Asset Information -->
        <v-stepper-content step="1">
          <v-card>
            <!-- Name of Area -->
            <v-row>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  :counter="max"
                  label="Area Name:"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- Asset Identifier -->
            <v-row>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  :counter="assetNumMax"
                  label="Asset Identifier Number:"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- Space Identifier -->
            <v-row>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  label="Spatial Web Identifier:"
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- System of which Asset is a Part of -->
            <v-row>
              <v-col>
                <v-select
                  :items="testList"
                  :menu-props="{ maxHeight: '400' }"
                  label="System of which Asset is a Part Of:"
                  multiple
                  required
                ></v-select>
              </v-col>
            </v-row>
            <!-- Asset Type/Description -->
            <!-- TODO: Other please specifiy option -->
            <v-row>
              <v-col>
                <v-select
                  :items="testList"
                  :menu-props="{ maxHeight: '400' }"
                  label="Asset Type:"
                  multiple
                  required
                ></v-select>
              </v-col>
            </v-row>

            <v-btn color="primary" @click="el = 2">
              Next
            </v-btn>
          </v-card>
        </v-stepper-content>

        <!-- Step 2: Asset Location -->
        <v-stepper-content step="2">
          <v-card>
            <!-- Asset Address -->
            <!-- TODO: Create Subform box for address -->
            <v-row>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  :counter="max"
                  label="Street:"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="space-between">
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  label="City:"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  label="State:"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  label="Zip Code:"
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- Asset Lat/Long -->
            <!-- TODO: Format to change depending on type of lat/long -->
            <v-row>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  :counter="latLongMax"
                  label="Asset Lat/Long:"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- Asset Owner -->
            <v-row>
              <v-col>
                <v-select
                  :items="testList"
                  :menu-props="{ maxHeight: '400' }"
                  label="Asset Owner:"
                  multiple
                ></v-select>
              </v-col>
            </v-row>
            <!-- Specific Contact -->
            <!-- TODO: Create subform w/ Name Phone Email -->

            <!-- TODO: Spacing between buttons needed -->
            <v-btn @click="el = 1">
              Previous
            </v-btn>
            <v-btn color="primary" @click="el = 3">
              Next
            </v-btn>
          </v-card>
        </v-stepper-content>

        <!-- Step 3: Asset History -->
        <v-stepper-content step="3">
          <v-card>
            <!-- Asset Age -->
            <v-row>
              <v-col>
                <v-text-field
                  color="purple darken-2"
                  :counter="3"
                  label="Asset Age:"
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- Asset design standards -->
            <v-row>
              <v-col>
                <v-textarea
                  :counter="250"
                  label="Asset Design Standards:"
                ></v-textarea>
              </v-col>
            </v-row>
            <!-- Applicable Hazards -->
            <v-row>
              <v-col>
                <v-select
                  :items="testList"
                  :menu-props="{ maxHeight: '400' }"
                  label="Applicable Hazards:"
                  multiple
                ></v-select>
              </v-col>
            </v-row>
            <!-- Asset History -->
            <v-row>
              <v-col>
                <v-textarea :counter="250" label="Asset History:"></v-textarea>
              </v-col>
            </v-row>
            <!-- Asset Update History -->
            <!-- TODO: make better formatting for history updates -->
            <v-row>
              <v-col>
                <v-textarea
                  :counter="250"
                  label="Asset Update History:"
                ></v-textarea>
              </v-col>
            </v-row>
            <!-- Funding sources -->
            <v-row>
              <v-col>
                <v-textarea
                  :counter="250"
                  label="Funding sources investigated for maintaining/updating this asset:"
                ></v-textarea>
              </v-col>
            </v-row>

            <!-- TODO: Spacing between buttons needed -->
            <v-btn @click="el = 2">
              Previous
            </v-btn>
            <v-btn color="primary" @click="el = 4">
              Next
            </v-btn>
          </v-card>
        </v-stepper-content>

        <!-- Step 4: Asset Dependencies -->
        <v-stepper-content step="4">
          <v-card>
            <!-- Asset Dependencies-->
            <v-row>
              <v-col>
                <v-select
                  :items="testList"
                  :menu-props="{ maxHeight: '400' }"
                  label="Assets dependent on this asset:"
                  multiple
                ></v-select>
              </v-col>
            </v-row>
            <!-- Nature of Dependency -->
            <v-row>
              <v-col>
                <v-textarea
                  :counter="250"
                  label="Nature of the asset downstream dependency:"
                ></v-textarea>
              </v-col>
            </v-row>
            <!-- Asset Upstream Dependencies-->
            <v-row>
              <v-col>
                <v-select
                  :items="testList"
                  :menu-props="{ maxHeight: '400' }"
                  label="Assets on which this asset depends upon:"
                  multiple
                ></v-select>
              </v-col>
            </v-row>
            <!-- Nature of Dependency -->
            <v-row>
              <v-col>
                <v-textarea
                  :counter="250"
                  label="Nature of the asset upstream dependency:"
                ></v-textarea>
              </v-col>
            </v-row>
            <!-- Sources of data for survey -->
            <!-- TODO: TextArea to generate based off of selection -->
            <v-row>
              <v-col>
                <v-select
                  :items="testList"
                  :menu-props="{ maxHeight: '400' }"
                  label="Sources of data for this survey:"
                  multiple
                ></v-select>
              </v-col>
            </v-row>

            <!-- TODO: Spacing between buttons needed -->
            <v-btn @click="el = 3">
              Previous
            </v-btn>
            <v-btn color="primary">
              Register
            </v-btn>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  name: "AssetForm",
  data() {
    return {
      el: 1,
      max: 60,
      assetNumMax: 30,
      latLongMax: 30,
      testList: ["option 1", "option 2", "option 3"],
    };
  },
};
</script>

<style></style>
