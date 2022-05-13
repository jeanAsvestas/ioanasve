<template>
    <div  class="container"> 
        <form class="col-md-4 row" @submit.prevent="handleSubmit" >
            <div class="mb-3">
                <input 
                  v-model="isActiveAsset" 
                  type="checkbox" 
                  class="form-check-input"
                  id="isActiveAsset"
                  value="isActiveAsset"
                  checked
                  required>
                  &nbsp;
                <label class="form-check-label" for="isActiveAsset">Active Asset</label>
            </div>
            <div class="mb-3">
                <label for="assetName" class="form-label">Asset Name</label>
                <input 
                  v-model="assetName" 
                  type="text" 
                  class="form-control" 
                  id="assetName"
                  name="assetName"
                  required>                
            </div>
            <div class="mb-3">
                <label for="assetType" class="form-label">Asset type</label>
                <select 
                  v-model="assetType"
                  class="form-select" 
                  id="assetType"
                  name="assetType"
                  required>
                    <!-- <option selected disabled v-text="'Choose type'"></option> -->
                    <option :value="1" v-text="'Small'"></option>
                    <option :value="2" v-text="'Large'"></option>
                </select>
            </div>
            <div class="mb-3">
                <label for="assetBuilding" class="form-label">Asset Building</label>
                <select 
                  v-model="assetBuilding" 
                  class="form-select" 
                  id="assetBuilding"
                  name="assetBuilding"
                  required>
                    <!-- <option disabled>Open this select menu</option> -->
                    <option :value="2" v-text="'Friesenberg 75'"></option>
                    <option :value="3" v-text="'relais 102'"></option>
                </select>
            </div>
            <div class="mb-3">
                <label for="assetFloor" class="form-label">Asset Floor</label>
                <select 
                  v-model="assetFloor"
                  class="form-select" 
                  id="assetFloor"
                  name="assetFlor"
                  required>
                    <!-- <option selected disabled>Open this select menu</option> -->
                    <option :value="2" v-text="'1.OG'"></option>
                    <option :value="3" v-text="'5.OG'"></option>
                </select>
            </div>
             <div class="mb-3">
                <label for="assetSetupTime" class="form-label">Asset Setup Time</label>
                <input 
                  v-model="assetSetupTime" 
                  type="number" 
                  class="form-control" 
                  id="assetSetupTime"
                  name="assetSetupTime"
                  required
                  min="0">                
            </div>
             <div class="mb-3">
                <label for="assetTeardownTime" class="form-label">Asset Teardown Time</label>
                <input 
                  v-model="assetTeardownTime" 
                  type="number" 
                  class="form-control" 
                  id="assetTeardownTime"
                  name="assetTeardownTime"
                  required
                  min="0">                
            </div>
             <div class="mb-3">
                <label for="assetDefaultCapacity" class="form-label">Asset Default Capacity</label>
                <input 
                  v-model="assetDefaultCapacity" 
                  type="number" 
                  class="form-control" 
                  id="assetDefaultCapacity"
                  name="assetDefaultCapacity"
                  required
                  min="0">                
            </div > 

            <div class="mb-3 groupData">Asset Groups
              <br>
              <input 
                  v-model="assetGroups" 
                  type="checkbox" 
                  class="form-check-input"
                  id="mobimo"
                  value="Mobimo">
                  &nbsp;
              <label for="mobimo" class="form-label" >Mobimo</label>
              <br>
              <input 
                  v-model="assetGroups" 
                  type="checkbox" 
                  class="form-check-input"
                  id="testGroup"
                  value="Test group">
                   &nbsp;
              <label for="testGroup" class="form-label">Test group</label>
              </div>
              <div class="mb-3 groupData" >Asset Setups
                 <div class="mb-3 " v-for="(setup,index) in assetSetups" :key="index">
                  <input 
                    v-model="setup.name" 
                    type="text" 
                    class="form-control" 
                    id="assetDefaultCapacity"
                    name="assetDefaultCapacity"
                    required
                    min="0">
                    <button @click.prevent="removeSetup(index)" class="btn btn-primary">Remove</button>
              </div>
                    <button @click.prevent="addMoreSetups" class="btn btn-primary">Add new setup</button>
              </div>
            <button  type="submit" class="btn btn-primary">Add</button>
        </form>    
    </div>  
</template>

<script>
import Asset from "../../models/asset.js";
// import axios from "axios";
export default {
  name: 'AddAsset',
  data() {
    return {
      assets: [],
      message: 'Hello Vue!',
      isLoading: true,      
        isActiveAsset: true,
        assetName: '',
        assetType: '',
        assetBuilding: '',
        assetFloor: '',
        assetSetupTime: '',
        assetTeardownTime: '',
        assetDefaultCapacity: '',
        assetGroups: [],
        assetSetups: [{id:"",name:''}],
      
    }
  },  
  methods:{
    handleSubmit(){
      console.log("submited");
      console.log(new Asset (this.isActiveAsset, this.assetName, this.assetType, this.assetBuilding, this.assetFloor, this.assetSetupTime, this.assetTeardownTime, this.assetDefaultCapacity, JSON.parse(JSON.stringify(this.assetGroups)), JSON.parse(JSON.stringify(this.assetSetups))));
    },
    addMoreSetups(){
      this.assetSetups.push({id:"",name:''});
    },
    removeSetup(index){
      this.assetSetups.splice(index, 1);
    }
  }
}
</script>

<style>
form{
  border: 1px solid black;
  padding-top: 10px;
  text-align: left;
}
  .groupData{
    border: 1px solid black;
  }

</style>
