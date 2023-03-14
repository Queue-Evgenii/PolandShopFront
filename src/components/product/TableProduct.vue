<template>
  <table class="info-product__table table-product info-product__block">
    <div class="info-product__title">Dane techniczne profili:</div>
    <tbody>
      <tr v-for="item in tableProductItems" :key="item.id">
        <th>{{item.th}}</th>
        <td>{{item.td}}</td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="stylus">
  .table-product {
    tbody {
      margin-top: 40px
    }
    tr {
      display: flex
      align-items: center
      &:nth-child(odd) {
        background: rgba(255, 168, 173, 0.52);
      }
    }
    td, th {
      flex: 1 1 50%
      text-align: left
      padding 10px 15px
      font-size: 20px;
      line-height: 28px;
    }
    th {
      color: #3D3D3D;
      font-weight 700
    }
    td {
      color: #000
    }
  }
</style>
<script>
  export default {
    props: {
      tableProductItems: {
        type: Array,
        required: true,
      }
    }
  }
</script>