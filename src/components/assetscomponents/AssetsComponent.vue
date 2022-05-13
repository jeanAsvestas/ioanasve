<template>
  <div class="container ">
    <div v-if="isLoading"> Loading ... </div>
    <div v-else> 
      <!-- {{JSON.stringify(res)}} -->
    <table id="tableComponent" class="table table-bordered table-striped">
      <thead>
      <tr >
        <!-- not optimal when res has objects -->
        <!-- <th  v-for="(attr,i) in fields" :key="i">{{attr}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i> </th> -->
        
        <th>Id</th>
        <th>Name</th>
        <th>Type</th>
        <th>Building</th>
        <th>Floor</th>
        <th>Active</th>
        <th>Setup Time</th>
        <th>Teardown Time</th>
        <th>Groups</th>
        <th>Setups</th>
        <th>Default Capacity</th>
        <th>Properties</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(asset,i) in assets" :key="i">
        <!-- not optimal when res has objects -->
        <!-- <td v-for="(attr,i) in fields" :key="i"> {{asset[attr]}} </td> -->
        <td>{{asset.id}}</td>
        <td>{{asset.name}}</td>
        <td>{{asset.type.display}}</td>
        <td>{{asset.building.display}}</td>
        <td>{{asset.floor.display}}</td>
        <td>{{asset.active}}</td>
        <td>{{asset.setupTime}}</td>
        <td>{{asset.teardownTime}}</td>
        <td>{{asset.groups.length}}</td>
        <td>{{asset.setups.length}}</td>
        <td>{{asset.defaultCapacity}}</td>
        <td>{{asset.properties}}</td>
        <td >
          <a :href="'/assets/'+asset.id" class="btn btn-primary">Edit</a>
          <a @click="handleDelete(asset.id)" class="btn btn-danger">Delete</a>          
        </td>
      </tr>
      </tbody>
    </table>
    <a :href="'/assets/new'" class="btn btn-primary">Add Asset</a>
    </div>
  </div>
</template>

<script>
import dataAssets from "../../../data.json";
//used for api
// import AssetService from "../../services/asset.js";
export default {
  name: 'AssetsComponent',
  data() {
    return {
      assets: [],
      message: 'Hello Vue!',
      isLoading: true,
    }
  },
  mounted(){
    sessionStorage.setItem("assets", JSON.stringify(dataAssets.elements));
    this.assets = JSON.parse(sessionStorage.getItem("assets"));
    this.isLoading = false;
    console.log(this.assets);

// used for api call
    // AssetService.getOneAsset(this.param)
    //   .then(response => {
    //     console.log(response.data);
    //     this.assets = response.data;
    //     this.isLoading = false;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });


  },
  methods: {
    handleDelete(id){
// used for api call
      // AssetService.removeAsset(id)
      //   .then(res => {
      //     alert(`deleted ${id}`);
      //     AssetService.getAllAssets()
      //       .then(res => {
      //         AssetService.getAllAssets()
      //           .then(res => {
      //             this.assets = res.data;
      //             this.isLoading = false;
      //           })
      //       })
      //   })
      //   .catch(err => {
      //     alert(`error deleting ${id}`);
      //   });
      alert(`deleted ${id}`);
    } 
  },
}
</script>
